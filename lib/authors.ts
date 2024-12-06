export interface Author {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export const authors: { [key: string]: Author } = {
  "sarah-miller": {
    id: "sarah-miller",
    name: "Sarah Miller",
    role: "Survey Research Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&crop=face",
    bio: "Sarah has over 15 years of experience in survey methodology and market research. She specializes in optimizing response rates and survey design."
  },
  "david-chen": {
    id: "david-chen",
    name: "David Chen",
    role: "Research Methodologist",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&auto=format&fit=crop&crop=face",
    bio: "David is an expert in research methodology and survey design with over 12 years of experience. He focuses on eliminating bias and improving data quality in surveys, having consulted for major research institutions and Fortune 500 companies."
  }
};