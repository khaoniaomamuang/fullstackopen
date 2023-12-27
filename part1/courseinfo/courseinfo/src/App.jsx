const Header = (props) => {
  return <h1>{props.part.name}</h1>;
};

const Content = (props) => {
  return (
    <>
      <p>
        {props.part[0].name} {props.part[0].exercises}
      </p>
      <p>
        {props.part[1].name} {props.part[1].exercises}
      </p>
      <p>
        {props.part[2].name} {props.part[2].exercises}
      </p>
    </>
  );
};

const Total = (props) => {
  let total = 0
  props.part.forEach((element) => {
    total += element.exercises;
  });
  return <p>Number of exercises {total}</p>;
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header part={course} />
      <Content part={course.parts} />
      <Total part={course.parts} />
    </div>
  );
};

export default App;
