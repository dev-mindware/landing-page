import Post1 from "@/assets/post1.png";
import Post2 from "@/assets/post2.png";
import Post3 from "@/assets/post3.png";
import Post4 from "@/assets/post4.png";
import Post5 from "@/assets/post5.png";
import Post6 from "@/assets/post6.png";
import Post7 from "@/assets/post7.png";
import Post8 from "@/assets/post8.png";
import Post9 from "@/assets/post9.png";
import Post10 from "@/assets/post10.png";

export interface Leader {
  id: number;
  name: string;
  title?: string;
  imageUrl: string;
  altText: string;
}

export const leaders: Leader[] = [
  {
    id: 1,
    name: "Leader 1",
    imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f357a17b-b4d7-40f8-a83a-6449707bf54e.png",
    altText: "Portrait of a serious man with black-rimmed glasses wearing a dark jacket in a modern office setting",
  },
  {
    id: 2,
    name: "Leader 2",
    imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9c16826c-7b08-417f-8fbd-f3fb4cf6a2fc.png",
    altText: "Smiling man wearing a dark shirt standing in a softly lit indoor space with warm tones",
  },
  {
    id: 3,
    name: "Leader 3",
    imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/864fb502-9097-4f7e-8d37-536db8a3c63b.png",
    altText: "Professional man in glasses with a cityscape background visible through large windows",
  },
  {
    id: 4,
    name: "Leader 4",
    imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/28bab1f0-6d77-41f7-9f39-a9b25f44a633.png",
    altText: "Confident young man with crossed arms wearing a casual blue shirt in a workspace",
  },
  {
    id: 5,
    name: "Leader 5",
    imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f082c52c-8669-4d4f-b133-74053794b3ed.png",
    altText: "Businessman in a suit smiling, standing indoors with blurred detailed background",
  },
  {
    id: 6,
    name: "Leader 6",
    imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/aa3a0178-3030-4533-9c70-68ea1f1d9b22.png",
    altText: "Smiling woman working on a laptop with low depth of field and warm lights in background",
  },
  {
    id: 7,
    name: "Leader 7",
    imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/893392e2-2c75-4583-959e-214a4582ee4e.png",
    altText: "Blonde businesswoman sitting at desk with large windows and office equipment in background",
  },
  {
    id: 8,
    name: "Leader 8",
    imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2c8bd2cf-7863-4605-aeee-d747f7cfa35e.png",
    altText: "Man with slight stubble smiling, in casual grey t-shirt in bright office",
  },
];

export interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

export const FAQList: FAQProps[] = [
  {
    question: "Qual a diferença entre o Libera e outras aplicações?",
    answer: "A tecnologia do Libera tem muitos diferenciadores que dar-te-ão uma vantagem como negócio. O Libera não só foi projectado por empreendedores para empreendedores, como possui três pontos principais para que o destacam das soluções tradicionais, tais como, abordagem digital ( multiplataforma, permitindo o acesso pelos dispositivos móveis ), design user-friendly ( fácil de navegar, minimalista, visualização clara de dados financeiros, intuitividade e flexibilidade ), serviços adicionais ( emissão de faturas certificadas, monitorizar despesas). No geral, o Libera dedica-se a tornar o empreendedorismo acessível a todos, gerir um negócio será mais fácil do que nunca graças a uma experiência digital",
    value: "item-1",
  },
  {
    question: "O que é a Contabilidade Digital?",
    answer:
      "A contabilidade digital representa a optimização dos serviços contabilísticos por meio da internet e softwares on-line, agregando conceitos como a automação, inteligência artificial e análise de dados.",
    value: "item-2",
  },
  {
    question:
      "Como funciona a gestão de documentos na nuvem?",
    answer:
      "Os arquivos podem ser enviados para a nuvem, armazenados e, posteriormente, compartilhados com clientes e funcionários.",
    value: "item-3",
  },
  {
    question: "Quero abrir uma empresa, quanto tempo demora?",
    answer: "O tempo de abertura de uma empresa pode variar dependendo de cada situação e do tipo de actividade comercial.",
    value: "item-4",
  },
  {
    question:
      "Qual é a finalidade da Contabilidade Digital?",
    answer:
      "A contabilidade digital tem como finalidade aperfeiçoar o serviço do contabilista e aprimorar a solução de obrigações legais e o atendimento aos clientes utilizando ferramentas on-line para tornar a actividade mais produtiva e eficiente.",
    value: "item-5",
  },
];


export const imagesLeft = [
  Post1,
  Post2,
  Post3,
  Post4,
  Post5,
  Post6,
];

export const imagesRight = [
  Post7,
  Post8,
  Post9,
  Post10,
];
