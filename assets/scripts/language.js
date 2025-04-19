const content = {
  en: {
    project_title: "Arthur RAMANDALINA",
    project_tagline: "Doctor Student | Structural Dynamics | Seismic Isolation",
    about_title: "About Me",
    about_content: "I am a doctoral student in the Structural Mechanics and Dynamics Laboratory at Saitama University. My research focuses on assessing the effectiveness of silicone elastomer in seismic isolation bearings through experimental studies.",
    research_title: "Research",
    research_content: "My research explores advanced techniques in isolation technologies to improve the safety and resilience of buildings and structures.",
    projects_title: "Projects",
    projects_content: "<li>Seismic Isolation Bearings: Developed experimental models for silicone elastomeric bearings.</li><li>Continuum Mechanics Simulations: Applied continuum mechanics principles to simulate stress and deformation in hyperelastic materials.</li><li>MATLAB and Python Simulations: Created computational models for structural mechanic and dynamic analysis.</li>",
    contact_title: "Contact",
    contact_content: 'Feel free to reach out to me via <a href="mailto:miharivoarthur@gmail.com">miharivoarthur@gmail.com</a> or connect with me on <a href="https://github.com/miharivoarthur">GitHub</a>.',
    downloads_content: 'Download <a href="assets/documents/English and Japanese.pdf" class="cv-link">my CV</a> or watch <a href="assets/videos/Self intro.mp4" class="video-link">my Self Introduction</a>.'
  },
  fr: {
    project_title: "Arthur RAMANDALINA",
    project_tagline: "Doctorant | Dynamique des Structures | Isolation Sismique",
    about_title: "À Propos",
    about_content: "Je suis doctorant au laboratoire de Mécanique et de dynamique des structures à l'Université de Saitama. Ma recherche porte sur l'efficacité des appareils d'appui d'isolation sismique en silicone.",
    research_title: "Recherche",
    research_content: "Ma recherche explore des techniques avancées en technologie d'isolation sismique pour améliorer la sécurité et la résilience des batiments et des structures.",
    projects_title: "Projets",
    projects_content: "<li>Appareil d'appui d'Isolation Sismique : Développement de modèles expérimentaux pour les appareils d'appui en silicone.</li><li>Simulations en Mécanique des Milieux Continus : Application des principes analytiques pour simuler les contraintes et déformations dans les matériaux hyperélastiques.</li><li>Simulations sur MATLAB et Python : Création de modèles de simulation mechanique et dynamique des structures.</li>",
    contact_title: "Contact",
    contact_content: 'N’hésitez pas à me contacter par email à <a href="mailto:miharivoarthur@gmail.com">miharivoarthur@gmail.com</a> ou sur <a href="https://github.com/miharivoarthur">GitHub</a>.',
    downloads_content: 'Télécharger <a href="assets/documents/English and Japanese.pdf" class="cv-link">mon CV</a> ou regarder <a href="assets/videos/Self intro.mp4" class="video-link">mon auto-introduction</a> (en Anglais).'
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
    contact_content: 'メールでご連絡ください: <a href="mailto:miharivoarthur@gmail.com">miharivoarthur@gmail.com</a> または <a href="https://github.com/miharivoarthur">GitHub</a>でご連絡ください。',
    downloads_content: '<a href="assets/documents/English and Japanese.pdf" class="cv-link">履歴書</a>をダウンロードするか、 <a href="assets/videos/Self intro.mp4" class="video-link">自己紹介</a>をご覧ください。'
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
    contact_content: document.getElementById('contact_content'),
    downloads_content: document.getElementById('downloads_content')
  };
  
  const selectedContent = content[lang];

  for (const key in elements) {
    if (elements[key]) {
      elements[key].innerHTML = selectedContent[key];
    }
  }
}
