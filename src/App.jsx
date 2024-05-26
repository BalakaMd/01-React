import { CORE_CONCEPTS, EXAMPLES } from "./data";

import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton/TabButton";

import { useState } from "react";

function App() {
  const [selectedComponent, setComponent] = useState("components");
  function handleClick(component) {
    setComponent(component);
  }
  return (
    <div>
      <main>
        <h2>Time to get started!</h2>
        <Header></Header>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept key={concept.title} {...concept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <menu>
            <TabButton
              isActive={selectedComponent === "components"}
              onClick={() => handleClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              isActive={selectedComponent === "jsx"}
              onClick={() => handleClick("jsx")}
            >
              Jsx
            </TabButton>
            <TabButton
              isActive={selectedComponent === "props"}
              onClick={() => handleClick("props")}
            >
              Props
            </TabButton>
            <TabButton
              isActive={selectedComponent === "state"}
              onClick={() => handleClick("state")}
            >
              State
            </TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedComponent].title}</h3>
            <p>{EXAMPLES[selectedComponent].description}</p>
            <pre>
              <code>{EXAMPLES[selectedComponent].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
