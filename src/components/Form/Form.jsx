import React from "react";

const Form = ({ addNewItem, nation, setNation, upDate }) => {
  return (
    <>
      <form onSubmit={addNewItem}>
        <div>
          <label>
            국가명
            <input
              type="text"
              value={nation.name}
              onChange={(e) => {
                setNation({ ...nation, name: e.target.value });
              }}
            />
          </label>
        </div>
        <div>
          <label>
            금메달
            <input
              type="text"
              value={nation.gold}
              onChange={(e) => {
                if (Number.isNaN(+e.target.value) || +e.target.value < 0) {
                  alert("숫자만 입력해주세요.");
                  return;
                }
                setNation({ ...nation, gold: e.target.value });
              }}
            />
          </label>
        </div>
        <div>
          <label>
            은메달
            <input
              type="text"
              value={nation.silver}
              onChange={(e) => {
                if (Number.isNaN(+e.target.value) || +e.target.value < 0) {
                  alert("숫자만 입력해주세요.");
                  return;
                }
                setNation({ ...nation, silver: e.target.value });
              }}
            />
          </label>
        </div>
        <div>
          <label>
            동메달
            <input
              type="text"
              value={nation.bronze}
              onChange={(e) => {
                if (Number.isNaN(+e.target.value) || +e.target.value < 0) {
                  alert("숫자만 입력해주세요.");
                  return;
                }
                setNation({ ...nation, bronze: e.target.value });
              }}
            />
          </label>
        </div>
        <div>
          <button type="submit">국가 추가</button>
          <button type="button" onClick={upDate}>
            업데이트
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
