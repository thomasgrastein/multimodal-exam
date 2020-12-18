import { Button, Card, Col, Row } from "antd";
import { useState } from "react";
import "./App.css";

const init = [
  {
    name: "The Haptic Modality",
    current: -1,
    prev: [],
    questions: [
      "Perception",
      "Example applications and tactons",
      "Advantages and Disadvantages",
      "Actuators and sonification",
      "Psychophysical evaluation",
    ],
  },
  {
    name: "The Auditory Modality",
    current: -1,
    prev: [],
    questions: [
      "Perception",
      "Example applications and earcons",
      "Advantages and Disadvantages",
      "Psychophysical evaluation",
    ],
  },
  {
    name: "The Visual Modality",
    current: -1,
    prev: [],
    questions: [
      "Perception",
      "Example applications and icons",
      "Advantages and Disadvantages",
      "Gestalt theory",
      "Psychophysical evaluation",
    ],
  },
  {
    name: "Models of Multimodal Interaction",
    current: -1,
    prev: [],
    questions: [
      "CASE, Care & Multiple Resource Theory",
      "Sensory Integration and Dominance",
      "Definition, advantages and disadvantages",
    ],
  },
  {
    name: "Speech",
    current: -1,
    prev: [],
    questions: [
      "Example applications",
      "Advantages and Disadvantages",
      "Combining speech with other modalities",
    ],
  },
];

function App() {
  const [exam, setExam] = useState(init);

  const draw = () => {
    setExam(
      exam.map((e, i) => {
        let pick = Math.floor(Math.random() * e.questions.length);
        let maxRetries = e.questions.length * 2;
        let retries = 0;
        let prev = e.prev;
        while (prev.includes(pick)) {
          pick = Math.floor(Math.random() * e.questions.length);
          if (retries > maxRetries) prev = [];
          retries++;
        }
        return { ...e, prev: [...e.prev, pick], current: pick };
      })
    );
  };

  return (
    <>
      <Row align="middle">
        {exam.map((e, i) => (
          <Col span={12} offset={6}>
            <Card title={e.name} key={i} style={{ margin: "3px 0" }}>
              {e.current !== -1 && e.questions[e.current]}
            </Card>
          </Col>
        ))}
      </Row>
      <Row align="bottom" justify="center">
        <Button onClick={() => draw()}>Draw!</Button>
      </Row>
    </>
  );
}

export default App;
