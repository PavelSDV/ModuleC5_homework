const jsdom = require("jsdom");
const { JSDOM } = jsdom;
global.DOMParser = new JSDOM().window.DOMParser


const parser = new DOMParser();

const nameList =
    `<list>
        <student>
            <name lang="en">
                <first>Ivan</first>
                <second>Ivanov</second>
            </name>
            <age>35</age>
            <prof>teacher</prof>
        </student>
        <student>
            <name lang="ru">
                <first>Петр</first>
                <second>Петров</second>
            </name>
            <age>58</age>
            <prof>driver</prof>
        </student>
    </list>`;

const xmlDOM = parser.parseFromString(nameList, "text/xml");

const listNode = xmlDOM.querySelector('list');
const studentNode = listNode.querySelectorAll('student');


let listStudent = []
let result = []

studentNode.forEach((item) => {
    const nameNode = item.querySelector('name');
    const firstNode = item.querySelector('first');
    const secondNode = item.querySelector('second');
    const ageNode = item.querySelector('age');
    const profNode = item.querySelector('prof');
    const langAttr = nameNode.getAttribute('lang');
    listStudent.push({
        name: `${firstNode.textContent} ${secondNode.textContent}`,
        age: ageNode.textContent,
        prof: profNode.textContent,
        lang: langAttr,
    });
});

result = {list: listStudent};

console.log(result);