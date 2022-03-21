const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://jsuarez0929.github.io/jsuar-portfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Josh',
  role: 'DevOps Engineer',
  description:
    '',
  resume: 'https://1drv.ms/b/s!AoinbrIbSGTfg5kwQ5Vs1aj9sc9PCw?e=pyCF4i',
  social: {
    linkedin: 'https://www.linkedin.com/in/josh0929/',
    github: 'https://github.com/jsuarez0929',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'TF-Graph-Visualizer (Pending)',
    description:
      'Creates visual architecture diagrams for AWS infrastructure created with terraform.',
    stack: ['Terraform', 'React', 'Go'],
    sourceCode: 'https://github.com/jsuarez0929/terramapper',
    livePreview: 'https://github.com/jsuarez0929/terramapper',
  },
  {
    name: 'TCP/IP Stack (Pending)',
    description:
      'Mock UNIX TCP/IP stack created from scratch.',
    stack: ['C', 'Linux'],
    sourceCode: 'https://github.com/jsuarez0929/C_lib/tree/master/TCP-IP-Stack',
    livePreview: 'https://github.com/jsuarez0929/C_lib/tree/master/TCP-IP-Stack',
  },
  {
    name: 'k8_utils',
    description:
      'Collection of kubectl utility shell scripts to make life easier.',
    stack: ['bash'],
    sourceCode: 'https://github.com/jsuarez0929/k8_utils',
    livePreview: 'https://github.com/jsuarez0929/k8_utils',
  },
  {
    name: 'Grafana custom dashboards',
    description:
      'Collection of custom grafana dashboards to quickly implement monitoring solutions for AWS services such as API Gateway & AWS ALBs',
    stack: ['bash'],
    sourceCode: 'https://github.com/jsuarez0929/k8_utils',
    livePreview: 'https://github.com/jsuarez0929/k8_utils',
  }
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Java',
  'Python',
  'JavaScript',
  'TypeScript',
  'React',
  'Go',
  'Ansible',
  'Terraform',
  'Git',
  'CI/CD',
  'AWS',
  'Kubernetes',
  'GitOps',
  'Helm'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'suarezjoshua0@gmail.com',
}

export { header, about, projects, skills, contact }
