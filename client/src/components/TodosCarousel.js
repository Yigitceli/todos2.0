import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import TodoCard from "./TodoCard";

export default function TodosCarousel(props) {
  const { todos, filter } = props;
  const [divs, setDivs] = useState([]);
  const [carouselItems, setCarouselItems] = useState([]);
  useEffect(() => {
    if (todos) {
      setDivs([]);
      for (let index = 0; index < Math.ceil(todos.length / 4); index++) {
        switch (filter) {
          case "all":
            setDivs((prev) => [
              ...prev,
              <div className="d-flex justify-content-center flex-wrap align-items-center h-100">
                {todos.slice(index * 4, index * 4 + 4).map((item) => {
                  console.log(todos.slice(index * 4, index + 4));
                  return <TodoCard key={item.id} data={item} />;
                })}
              </div>,
            ]);
            break;
          case "completed":
            setDivs((prev) => [
              ...prev,
              <div className="d-flex justify-content-center flex-wrap align-items-center h-100">
                {todos
                  .slice(index * 4, index * 4 + 4)
                  .map(
                    (item) =>
                      item.is_complete && <TodoCard key={item.id} data={item} />
                  )}
              </div>,
            ]);
            break;
          case "unCompleted":
            setDivs((prev) => [
              ...prev,
              <div className="d-flex justify-content-center flex-wrap align-items-center h-100">
                {todos
                  .slice(index * 4, index * 4 + 4)
                  .map(
                    (item) =>
                      !item.is_complete && (
                        <TodoCard key={item.id} data={item} />
                      )
                  )}
              </div>,
            ]);
            break;

          default:
            break;
        }
      }
    }
  }, [todos, filter]);

  useEffect(() => {
    if (divs.length > 0) {
      setCarouselItems([]);
      for (let index = 0; index < divs.length; index++) {
        setCarouselItems((prev) => [
          ...prev,
          <Carousel.Item className="h-100" key={index}>
            {divs[index]}
          </Carousel.Item>,
        ]);
      }
    }
  }, [divs]);

  return (
    <div className="h-100 w-100">
      <Carousel variant="dark" className="w-100 h-100">
        {carouselItems}
      </Carousel>
    </div>
  );
}
