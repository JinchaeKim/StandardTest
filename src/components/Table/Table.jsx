import React from "react";

const Table = ({ nation, nationList, removeItem }) => {
  if (nationList.length === 0)
    return <p>아직 추가된 국가가 없습니다. 메달을 추적하세요!</p>;
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>국가명</th>
            <th>금메달</th>
            <th>은메달</th>
            <th>동메달</th>
            <th>액션</th>
          </tr>
        </thead>
        <tbody>
          {nationList.map((nation) => {
            return (
              <tr>
                <td>{nation.name}</td>
                <td>{nation.gold}</td>
                <td>{nation.silver}</td>
                <td>{nation.bronze}</td>
                <td>
                  <button
                    onClick={() => {
                      removeItem(nation.id);
                    }}
                  >
                    삭제
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
