const myLogger = store => next => action => {
  console.log(action);
  console.log('\tPrev:', store.getState());
  const result = next(action); // 다음 미들웨어 혹은 미들웨어가 없으면 리듀서에게 전달
  console.log('\tNext:', store.getState()); // 리듀서에서 처리가 된 다음의 상태를 가져와 콘솔에 출력
  return result; // 컨테이너에서 디스패치 되었을 때 리턴하는 값
};

export default myLogger;
