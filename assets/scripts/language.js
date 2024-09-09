const content = {
  en: {
    project_title: "Arthur RAMANDALINA",
    project_tagline: "Doctoral Student | Structural Dynamics | Seismic Isolation Researcher",
    about_title: "About Me",
    about_content: "I am a doctoral student in the Structural Dynamics Laboratory at Saitama University. My research focuses on assessing the effectiveness of silicone rubber in seismic isolation bearings through experimental studies.",
    research_title: "Research",
    research_content: "My research explores advanced techniques in earthquake engineering to improve the safety and resilience of structures.",
    projects_title: "Projects",
    projects_content: "<li>Seismic Isolation Bearings: Developed experimental models for silicone rubber bearings.</li><li>Continuum Mechanics Simulations: Applied continuum mechanics principles to simulate stress and deformation in hyperelastic materials.</li><li>MATLAB and Python Simulations: Created computational models for structural dynamic analysis and simulation.</li>",
    contact_title: "Contact",
    contact_content: 'Feel free to reach out to me via <a href="mailto:miharivoarthur@gmail.com">miharivoarthur@gmail.com</a> or connect with me on <a href="https://github.com/miharivoarthur">GitHub</a>.'
  },
  fr: {
    project_title: "Arthur RAMANDALINA",
    project_tagline: "Doctorant | Dynamique des Structures | Chercheur en Isolation Sismique",
    about_title: "À Propos",
    about_content: "Je suis doctorant au laboratoire de dynamique des structures à l'Université de Saitama. Ma recherche porte sur l'efficacité des roulements d'isolation sismique en caoutchouc de silicone.",
    research_title: "Recherche",
    research_content: "Ma recherche explore des techniques avancées en ingénierie sismique pour améliorer la sécurité et la résilience des structures.",
    projects_title: "Projets",
    projects_content: "<li>Roulements d'Isolation Sismique : Développement de modèles expérimentaux pour les roulements en caoutchouc de silicone.</li><li>Simulations en Mécanique des Milieux Continus : Application des principes pour simuler les contraintes et déformations dans les matériaux hyperélastiques.</li><li>Simulations MATLAB et Python : Création de modèles de simulation dynamique des structures.</li>",
    contact_title: "Contact",
    contact_content: 'N’hésitez pas à me contacter par email à <a href="mailto:miharivoarthur@gmail.com">miharivoarthur@gmail.com</a> ou sur <a href="https://github.com/miharivoarthur">GitHub</a>.'
  },
  ja: {
    project_title: "アーサー・ラマンダリナ",
    project_tagline: "博士課程 | 構造力学 | 免震研究者",
    about_title: "私について",
    about_content: "私は埼玉大学構造力学研究室で博士課程の学生です。私の研究は、免震ベアリングにおけるシリコンゴムの有効性を実験的に評価することに焦点を当てています。",
    research_title: "研究",
    research_content: "私の研究は、地震工学の先進技術を探求し、構造物の安全性と耐震性を向上させることに取り組んでいます。",
    projects_title: "プロジェクト",
    projects_content: "<li>免震ベアリング: シリコンゴムベアリングの実験モデルを開発。</li><li>連続体力学シミュレーション: 超弾性材料の応力と変形をシミュレートするための原理を適用。</li><li>MATLABおよびPythonシミュレーション: 構造動力学解析およびシミュレーションのための計算モデルを作成。</li>",
    contact_title: "連絡先",
    contact_content: 'メールでご連絡ください: <a href="mailto:miharivoarthur@gmail.com">miharivoarthur@gmail.com</a> または <a href="https://github.com/miharivoarthur">GitHub</a>でご連絡ください。'
  }
};

function changeLanguage(event) {
  const lang = event.target.value;
  const elements = {
    project_title: document.getElementById('project_title'),
    project_tagline: document.getElementById('project_tagline'),
    about_title: document.getElementById('about_title'),
    about_content: document.getElementById('about_content'),
    research_title: document.getElementById('research_title'),
    research_content: document.getElementById('research_content'),
    projects_title: document.getElementById('projects_title'),
    projects_content: document.getElementById('projects_content'),
    contact_title: document.getElementById('contact_title'),
    contact_content: document.getElementById('contact_content')
  };
  
  const selectedContent = content[lang];

  for (const key in elements) {
    if (elements[key]) {
      elements[key].innerHTML = selectedContent[key];
    }
  }
}
