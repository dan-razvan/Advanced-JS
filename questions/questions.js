1. Ce numim o componenta in react?
   
   In general in react, o componenta este o bucata de cod, fie functie sau clasa care o separam de restul aplicatiei si pe care o putem folosi unde este nevoie de eval.

2. Cum "fabricam" o componenta?

   O "fabricam" printr-o clasa sau functie. Codul avem grija sa fie astfel scris incat componenta sa poata fi refolosita. 

3. Rescrieti acest cod <MyComponent property="value" /> fara utilizarea sintaxei JSX

   React.createElement(MyComponent, {property: 'value'}, null)

4. Ce reprezinta "props" in terminologia react?

   Props sunt un fel de atribute folosite in react pentru a trimite data de la o componenta parinte la o componenta copil.

5. Atunci cand intr-o componenta trebuie transmisa o valoare fixa in template, care din urmatoarele doua variante este sintaxa corecta (cu argumente): a. <MyComponent value=1000 /> b. <MyComponent value="1000" /> c. <MyComponent value={1000} />

Raspuns final: c. <MyComponent value={1000} />

6. In ce caz o componenta in JSX este scrisa cu PAIRED TAG?
   
   Scriem cu pair tag atunci cand componenta contine componente copil.

7. Rescrieti urmatorul cod (unde componenta Child este inclusa in componenta Parent de 3 ori) utilizand doar SINGLE TAG pentru "Parent"!!! in JSX

function Child(props) {
return (<div>This is the {props.name} child!)</div>)
}

function Parent(props) {
return (<div>{props.children}</div>)
}

// main component, rewrite the code here

function App() {
return (

   <div>
      <Parent>
         <Child name="One"/>
         <Child name="Two"/>
         <Child name="Three"/>
      </Parent>
   </div>
   )
}

---

function Child(props) {
return (<div>This is the {props.name} child!)</div>)
}

function Parent(props) {
return (

   <div>
      <Child name="One"/>
      <Child name="Two"/>
      <Child name="Three"/>
   </div>)
}

// main component, rewrite the code here

function App() {
return (

   <div>
      <Parent />
   </div>
      )
}

8. Aveti urmatorul cod, rescrieti codul astfel incat proprietatea transmisa "customContent" sa se numeasca "custom-content"
   function MyComponent(props) {
   return (<div>{props.customContent}</div>)
   }

// main component, rewrite the code here
function App() {
return (

   <div>
      <MyComponent customContent="This is some text for testing!"/>
   </div>
   )
}
