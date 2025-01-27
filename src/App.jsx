import React, { useState } from "react";
import Form from "./components/Form/Form";
import Table from "./components/Table/Table";

const defaultNations = [];
const App = () => {
  const defaultNation = {
    id: 1,
    name: "",
    gold: 0,
    silver: 0,
    bronze: 0,
  };

  const [nation, setNation] = useState(defaultNation);
  const [nationList, setNationList] = useState(defaultNations);

  // 테이블 추가 컴포넌트
  const addNewItem = (e) => {
    e.preventDefault();

    // 위치 중요
    if (nationList.some((nationEl) => nation.name === nationEl.name)) {
      alert("이미 등록된 국가입니다.");
      return;
    }

    if (
      nation.name === "" &&
      nation.gold === 0 &&
      nation.silver === 0 &&
      nation.bronze === 0
    )
      alert("값을 입력해주세요!");

    const newCountry = { ...nation, id: Date.now() };
    const newArray = [...nationList, newCountry];

    setNationList(newArray);
    setNation(defaultNation);
  };

  // 테이블 삭제 컴포넌트
  const removeItem = (id) => {
    const filteredNation = nationList.filter((i) => {
      return i.id !== id;
    });
    setNationList(filteredNation);
    setNation(defaultNation);
  };

  // 테이블 업데이트 컴포넌트
  const upDate = () => {
    if (!nationList.some((nationEl) => nation.name === nationEl.name)) {
      alert("등록되지 않은 국가입니다.");
      return;
    }

    const findNation = nationList.find((nationEl) => {
      return nationEl.name === nation.name;
    });
    const mapNation = nationList.map((nationEl) => {
      if (nationEl.name === findNation.name) {
        return { ...nation, id: nationEl.id };
      }
      return nationEl;
    });
    setNationList(mapNation);
    setNation(defaultNation);
  };

  return (
    <>
      <h1>2024 파리 올림픽</h1>
      <Form
        addNewItem={addNewItem}
        nation={nation}
        setNation={setNation}
        upDate={upDate}
      />
      <Table nation={nation} nationList={nationList} removeItem={removeItem} />
    </>
  );
};

export default App;
