export interface Icourse {
  id: string;
  imgurl: string;
  name: string;
  category: string;
  descaription: string;
  nameteacher:string;
  price: string;
}
export const course: Icourse[] = [
  {
    id: "1",
    imgurl:
      "https://cdn-icons-png.flaticon.com/512/3771/3771278.png",
    name: "رياضيات01",
    category: "رياضيات",
    nameteacher:"غيداء العبدالله",
    descaription: "شرح مقرر ثالث ابتدائي",
    price: "100 ريال",
  },
  {
    id: "1",
    imgurl:
      "https://cdn-icons-png.flaticon.com/512/2933/2933245.png",
    name: "حاسب",
    category: "الحاسب الألي",
    nameteacher:"محمد عبدالله",
    descaription: "شرح مقرر اول متوسط",
    price: "200 ريال",
  },
  {
    id: "1",
    imgurl:
      "https://cdn-icons-png.flaticon.com/512/1046/1046269.png",
    name: "كيمياء",
    category: "العلوم",
    nameteacher:"سارة عبدالاله",
    descaription: "شرح مقرر ثاني ثانوي",
    price: "300 ريال",
  },
];
