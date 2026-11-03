import { teamRepository } from './config.js';
import { materialSections, analysisSections } from './content.js';

const $ = (selector) => document.querySelector(selector);
const analysis = document.body.dataset.page === 'analysis';
const sections = analysis ? analysisSections : materialSections;

function element(tag, value, className) {
  const node = document.createElement(tag);
  node.textContent = value;
  if (className) node.className = className;
  return node;
}

function addLink(label, repository, path) {
  if (!/^[\w.-]+\/[\w.-]+$/.test(repository)) return;
  const link = element('a', label, 'github-link');
  link.href = 'https://github.com/' + repository + path;
  $('#github-actions').append(link);
}

for (const [index, [, title, hint, entries]] of sections.entries()) {
  const panel = document.createElement('section');
  panel.append(element('span', String(index + 1).padStart(2, '0'), 'tag'),
    element('h2', title), element('p', hint, 'hint'));
  for (const [heading, body] of entries) {
    const card = element('article', '', 'card');
    card.append(element('h3', heading), element('p', body));
    panel.append(card);
  }
  $('#sections').append(panel);
}

$('nav a:nth-child(' + (analysis ? 2 : 1) + ')').setAttribute('aria-current', 'page');
$('#intro').textContent = analysis
  ? '从作文特征与计量定义出发，追踪模型与教师在哪里产生分歧。'
  : '集中整理高中语文作文的考试材料、评分规则与教师访谈。';

$('#share').onclick = async () => {
  const url = new URL(location.pathname, location.origin).href;
  try {
    await navigator.clipboard.writeText(url);
    $('#share').textContent = '已复制分享链接';
  } catch {
    window.prompt('复制此页面链接', url);
  }
};

const owner = location.hostname.match(/^([\w-]+)\.github\.io$/)?.[1];
const project = location.pathname.split('/')[1];
if (owner && project) addLink('在 GitHub 编辑公开概览', owner + '/' + project, '/edit/main/docs/content.js');
if (teamRepository) addLink('打开团队资料库', teamRepository, '');
