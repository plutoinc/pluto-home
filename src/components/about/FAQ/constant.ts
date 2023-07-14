export interface FaqType {
  question: string;
  answer: string[];
}

export const FAQ_LIST = [
  {
    question: "How we started" as const,
    answer: [
      "We were founded at first to address various issues related to the distribution of copyright revenue in academic papers and the inefficient review process, and we attempted to solve these problems using blockchain technology.",
      "During the development process of the product, we realized that many data infrastructures related to papers were not established. We then set our company’s primary goal to establishing a data infrastructure related to publications. In this direction, we have built metadata databases for publications and developed a search engine for academic papers.",
    ],
  },
  {
    question: "Why metadata database?" as const,
    answer: [
      "Despite the development of many information systems in modern times, the system for delivering academic information still heavily relies on published papers. Despite the advancement of internet-based communication tools, papers are circulated in a format (PDF), comparable to printed materials. Due to its similarity, researchers often have to read most of the paper to confirm information. We will extract information from individual papers and transform it into machine-readable data, and based on this data, we will build a new database.",
      "Through such databases, researchers no longer need to invest a lot of time searching for specific information in papers, but also quickly identify links between existing data that was previously difficult to find and derive insights from relevant information.",
    ],
  },
  {
    question:
      "Why choose Research Intelligence instead of a search engine?" as const,
    answer: [
      "There are currently numerous search engines available for finding papers, including Scinapse, which we developed, as well as Google Scholar and Semantic Scholar. While the specific goals of each individual paper search engine may differ slightly, they all share the common goal of displaying a list of papers related to predetermined keywords. Therefore, regardless of which service is used, we must manually check all listed papers.",
      "We believe that fundamental innovation is needed to change this behaviour in research, which is why we are developing a new type of tool called Research Intelligence, rather than a search engine.",
      "We believe that it is highly inefficient to skim through multiple entire papers just to check if they contain specific information. Scinapse does not pursue a simple search engine that requires checking individual papers but pursues Research Intelligence that allows easy confirmation of content through the analysis of all papers.",
    ],
  },
  {
    question: "What differentiates us from a search engine?" as const,
    answer: [
      "Unlike many other search engine platforms, we provide a research discovery service.",
      "Scinapse is designed specifically for academic research, and it uses advanced technology to accurately identify key entities such as authors, institutions, and citations offering precise entity recognition.",
      "We offer comprehensive coverage. Our platform crawls and indexes millions of academic papers from a variety of sources, including publishers, preprint servers, and institutional repositories. This means that you can find research papers that may not be available through general search engines.",
      "We provide advanced analysis tools that allow you to quickly identify trends and patterns in academic literature. This is not possible with a general search engine.",
      "Additionally, we take pride in our user-friendly interface. Scinapse is designed with researchers in mind, and its interface makes it easy to find relevant research papers and analyze them quickly.",
      "Overall, we offer a specialized and comprehensive approach to academic research that general search engines cannot match.",
    ],
  },
];
