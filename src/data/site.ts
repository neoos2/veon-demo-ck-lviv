// All facts below come from veon/client.json (C-001…C-008) and the clinic price list (C-004, veon/research/1b/dl/price.txt).
// Nothing is invented: no opening hours (C-009 unconfirmed), no promotions (R-015), no doctor count (R-013).

export interface Clinic {
  key: "bolharska" | "kortumivka";
  street: string;
  address: string;
  phone: string;
  phoneDisplay: string;
  rating: string;
  reviews: string;
  here: string[];
  map: string;
}

const mapUrl = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

export const clinics: Clinic[] = [
  {
    key: "bolharska",
    street: "Болгарська, 4",
    address: "м. Львів, вул. Болгарська, 4",
    phone: "+380684315152",
    phoneDisplay: "+38 068 431-51-52",
    rating: "4,4",
    reviews: "166 відгуків",
    here: ["стоматологічний мікроскоп", "дві технічні лабораторії", "рентген-кабінет"],
    map: mapUrl("Dr.Kopytko, вул. Болгарська, 4, Львів"),
  },
  {
    key: "kortumivka",
    street: "Кортумівка, 5",
    address: "м. Львів, вул. Кортумівка, 5",
    phone: "+380678096765",
    phoneDisplay: "+38 067 809-67-65",
    rating: "4,7",
    reviews: "73 відгуки",
    here: ["технічна лабораторія", "рентген-кабінет"],
    map: mapUrl("Dr.Kopytko, вул. Кортумівка, 5, Львів"),
  },
];

export const email = "zubik.lviv@ukr.net";
export const socials = [
  { name: "Instagram", handle: "@dr.kopytko_dc", url: "https://www.instagram.com/dr.kopytko_dc/" },
  { name: "Facebook", handle: "stomatKopytko", url: "https://www.facebook.com/stomatKopytko" },
];

export const nav = [
  { href: "#posluhy", label: "Послуги" },
  { href: "#tsiny", label: "Ціни" },
  { href: "#likari", label: "Лікарі" },
  { href: "#dytiacha-stomatolohiia", label: "Дітям" },
  { href: "#kliniky", label: "Клініки" },
];

export interface Direction {
  id: string;
  name: string;
  items: string[];
  priceLabel: string;
  price: string;
  from?: boolean;
  more: string;
}

export const directions: Direction[] = [
  {
    id: "likuvannia-zubiv",
    more: "Про лікування зубів",
    name: "Лікування зубів",
    items: ["Професійна гігієна", "Лікування карієсу", "Ендодонтичне лікування, зокрема під мікроскопом", "Лікування пародонтиту", "Художня реставрація"],
    priceLabel: "Пломба",
    price: "1 400",
    from: true,
  },
  {
    id: "protezuvannia",
    more: "Про протезування",
    name: "Протезування",
    items: ["Незнімне протезування", "Знімні зубні протези", "Вініри", "Безметалева кераміка", "Бюгельний протез"],
    priceLabel: "Металокерамічна коронка",
    price: "3 800",
  },
  {
    id: "ortodontiia",
    more: "Про ортодонтію",
    name: "Ортодонтія",
    items: ["Брекет-системи, металеві та керамічні", "Апарати для розширення щелеп", "Лікування молочного, змінного та постійного прикусу", "Діагностика зубощелепної системи"],
    priceLabel: "Консультація ортодонта",
    price: "700",
  },
  {
    id: "khirurhiia-implantatsiia",
    more: "Про хірургію та імплантацію",
    name: "Хірургія та імплантація",
    items: ["Імплантація зубів", "Видалення зубів", "Синус-ліфтинг", "Резекція зуба", "Кюретаж"],
    priceLabel: "Імплант Ітерум",
    price: "13 000",
  },
  {
    id: "dytiacha-stomatolohiia",
    more: "Про дитячу стоматологію",
    name: "Дитяча стоматологія",
    items: ["Лікування молочних зубів", "Лікування карієсу у дітей", "Гінгівіт і пародонтит у дітей", "Виправлення прикусу"],
    priceLabel: "Консультація дитячого лікаря",
    price: "300",
  },
  {
    id: "medykamentoznyi-son",
    more: "Про медикаментозний сон",
    name: "Медикаментозний сон",
    items: ["Дитячий наркоз", "Досвідчений штатний анестезіолог", "Лікування й видалення молочних зубів уві сні"],
    priceLabel: "Для дітей, 2 години",
    price: "7 000",
  },
];

export const prices: { name: string; price: string }[] = [
  { name: "Первинний огляд та консультація", price: "200" },
  { name: "Консультація з КТ", price: "500" },
  { name: "Консультація дитячого лікаря-стоматолога", price: "300" },
  { name: "Консультація ортодонта", price: "700" },
  { name: "Професійна гігієна, ейр флоу", price: "1 400" },
  { name: "Пломба композитна, поверхневий карієс", price: "1 400" },
  { name: "Металокерамічна коронка", price: "3 800" },
  { name: "Цирконієва коронка", price: "6 800" },
  { name: "Медикаментозний сон для дітей, 2 години", price: "7 000" },
  { name: "Дентальний імплант, система Ітерум", price: "13 000" },
];

export interface Doctor {
  name: string;
  given: string;
  role: string;
  years: number;
  photo?: string;
  initials: string;
}

// Order and photos as on the clinic's current homepage (lik*.jpg mapping checked in home.html).
export const doctors: Doctor[] = [
  { name: "Адамчук", given: "Олег Ярославович", role: "Лікар-стоматолог", years: 8, photo: "adamchuk", initials: "ОА" },
  { name: "Амбіцький", given: "Ярослав Ігорович", role: "Гігієна та пародонтологія", years: 19, photo: "ambitskyi", initials: "ЯА" },
  { name: "Гуцал", given: "Богдан Валерійович", role: "Лікар-стоматолог", years: 19, photo: "hutsal", initials: "БГ" },
  { name: "Іванець", given: "Орися Василівна", role: "Ортодонт", years: 10, photo: "ivanets", initials: "ОІ" },
  { name: "Кряжев", given: "Сергій Володимирович", role: "Терапевт вищої категорії", years: 28, photo: "kriazhev", initials: "СК" },
  { name: "Курій", given: "Назарій Петрович", role: "Лікар-стоматолог", years: 10, photo: "kurii", initials: "НК" },
  { name: "Копитко", given: "Сергій Олександрович", role: "Головний лікар, вища категорія", years: 24, photo: "kopytko", initials: "СК" },
  { name: "Попелишин", given: "Світлана Богданівна", role: "Лікар-стоматолог", years: 14, photo: "popelyshyn", initials: "СП" },
  { name: "Чопик", given: "Надія Миколаївна", role: "Лікар-стоматолог", years: 9, photo: "chopyk-n", initials: "НЧ" },
  { name: "Чопик", given: "Микола Миколайович", role: "Терапевт, ендодонтія під мікроскопом", years: 11, photo: "chopyk-m", initials: "МЧ" },
  { name: "Стегній", given: "Лілея Остапівна", role: "Дитячий стоматолог", years: 7, photo: "stehnii", initials: "ЛС" },
  { name: "Поточняк", given: "Олег Михайлович", role: "Лікар-стоматолог", years: 6, photo: "potochniak", initials: "ОП" },
  { name: "Беніцька", given: "Тетяна Петрівна", role: "Ортодонт", years: 6, photo: "benitska", initials: "ТБ" },
  { name: "Плотницький", given: "Андрій Сергійович", role: "Імплантолог", years: 24, photo: "plotnytskyi", initials: "АП" },
  { name: "Галамай", given: "Артем Сергійович", role: "Лікар-стоматолог", years: 2, initials: "АГ" },
  { name: "Когут", given: "Уляна Андріївна", role: "Лікар-стоматолог", years: 5, photo: "kohut", initials: "УК" },
  { name: "Кук", given: "Роксолана Ігорівна", role: "Дитячий стоматолог", years: 15, initials: "РК" },
  { name: "Гордек", given: "Марія Михайлівна", role: "Лікар-стоматолог", years: 11, initials: "МГ" },
];

export const yearsWord = (n: number): string => {
  const m10 = n % 10;
  const m100 = n % 100;
  if (m10 === 1 && m100 !== 11) return "рік";
  if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return "роки";
  return "років";
};

export const equipment: { term: string; value: string }[] = [
  { term: "Стоматологічні установки", value: "22 сучасні установки" },
  { term: "Технічні лабораторії", value: "дві на вул. Болгарській і одна на вул. Кортумівці" },
  { term: "Рентген", value: "рентген-кабінети й досвідчені рентгенологи в обох клініках" },
  { term: "Мікроскоп", value: "стоматологічний мікроскоп у клініці на вул. Болгарській" },
  { term: "Стерилізація", value: "термодезинфектор, машинка для пакування інструментів, автоклав класу B" },
  { term: "Дитячий наркоз", value: "досвідчений штатний анестезіолог" },
];
