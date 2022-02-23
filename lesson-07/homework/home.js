const javaScriptDeveloper = {
  frameworks: ['React', 'Angular', 'Vue'],
  languages: ['Russian', 'English'],
  salary: 7000,
  currency: 'USD',
  experience: 15,
  domainAreasToWork: ['informational', 'e-commerce', 'blockchain', 'social'],
};

const vacanciesList = [
  {
    companyName: 'rozetka',
    language: 'English',
    probationPeriodSalary: 2500,
    probationPeriodMonths: 3,
    salary: 1000,
    requiredExperience: 3,
    domain: 'e-commerce',
  },
  {
    companyName: 'microsoft',
    language: 'English',
    probationPeriodSalary: 2500,
    probationPeriodMonths: 3,
    salary: 7500,
    requiredExperience: 14,
    domain: 'informational',
  },
  {
    companyName: 'google',
    language: 'English',
    probationPeriodSalary: 2500,
    probationPeriodMonths: 3,
    salary: 10000,
    requiredExperience: 10,
    domain: 'informational',
  },
  {
    name: 'facebook',
    language: 'English',
    probationPeriodSalary: 2500,
    probationPeriodMonths: 3,
    salary: 8000,
    requiredExperience: 2,
    domain: 'social',
  },
  {
    imya: 'vkontakte',
    language: 'Russian',
    salary: 2000,
    requiredExperience: 14,
    domain: 'social',
  },
  {
    name: 'instagram',
    language: 'French',
    salary: 8000,
    requiredExperience: 14,
    domain: 'social',
  },
];

const workSearchCompanies = [
  {
    name: 'djinni',
    listOfCompanies: [{ name: 'microsoft' }, { name: 'facebook' }],
  },
  {
    name: 'linkedin',
    listOfCompanies: [{ name: 'vkontakte' }, { name: 'instagram' }, 'google'],
  },
];

/*
 * TASK 0
 *
 * Перепиши классные работы используя метод массива forEach
 *
 * */

/*
 * TASK 1
 *
 * Напишите функцию, которая будет принимать 2 аргумента разработчик и вакансии.
 * И находить вакансии которые подходят по зарплате
 * Функция должна вернуть список компаний
 *
 * */

function findVacancies(dev, vacancies) {}

findVacancies(javaScriptDeveloper, vacanciesList);
/*
[
  {
    companyName: 'microsoft',
    language: 'English',
    probationPeriodSalary: 2500,
    probationPeriodMonths: 3,
    salary: 7500,
    requiredExperience: 14,
    domain: 'informational',
  },
  {
    companyName: 'google',
    language: 'English',
    probationPeriodSalary: 2500,
    probationPeriodMonths: 3,
    salary: 10000,
    requiredExperience: 10,
    domain: 'informational',
  },
  {
    name: 'facebook',
    language: 'English',
    probationPeriodSalary: 2500,
    probationPeriodMonths: 3,
    salary: 8000,
    requiredExperience: 2,
    domain: 'social',
  },
  {
    imya: 'instagram',
    language: 'French',
    salary: 8000,
    requiredExperience: 14,
    domain: 'social',
  },
]
* */

/*
 * TASK 2
 *
 * Напиши функцию, которая будет принимать список workSearchCompanies
 * и заменять каждую компанию в listOfCompanies на компанию из vacancies
 *
 * */

function mapListOfCompanies(companies) {}

mapListOfCompanies(workSearchCompanies);
/*
[
  {
    name: "djinni",
    listOfCompanies: [
      {
        companyName: "microsoft",
        language: "English",
        probationPeriodSalary: 2500,
        probationPeriodMonths: 3,
        salary: 7500,
        requiredExperience: 14,
        domain: "informational",
      },
      {
        name: "facebook",
        language: "English",
        probationPeriodSalary: 2500,
        probationPeriodMonths: 3,
        salary: 8000,
        requiredExperience: 2,
        domain: "social",
      },
    ],
  },
  {
    name: "linkedin",
    listOfCompanies: [
      // тоже самое что наверху
    ],
  },
];
* */

/*
 * TASK 4
 *
 * Напиши функцию, которая будет принимать 2 аргумента список вакансий и "имя домена" и возращать количество
 * совпадений
 *
 * */

function findCompaniesDomain(companies, domainName) {}

findCompaniesDomain(vacanciesList, 'e-commerce');
/*
[
  {
    companyName: 'rozetka',
    language: 'English',
    probationPeriodSalary: 2500,
    probationPeriodMonths: 3,
    salary: 1000,
    requiredExperience: 3,
    domain: 'e-commerce',
  }
]
* */

findCompaniesDomain(vacanciesList, 'informational');
/*
[
  {
    companyName: 'microsoft',
    language: 'English',
    probationPeriodSalary: 2500,
    probationPeriodMonths: 3,
    salary: 7500,
    requiredExperience: 14,
    domain: 'informational',
  },
  {
    companyName: 'google',
    language: 'English',
    probationPeriodSalary: 2500,
    probationPeriodMonths: 3,
    salary: 10000,
    requiredExperience: 10,
    domain: 'informational',
  },
]
* */
