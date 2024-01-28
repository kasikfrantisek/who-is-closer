export type RootStackParamList = {
    Hello: undefined;
    Next: undefined;
    Question: {players:string[]};
  };

  export type QuestionType = {
    id: number;
    question: string;
    answer: number;
  }