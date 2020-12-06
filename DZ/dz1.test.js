describe("Тесты для первого задания", () => {
  const a = 10;
  const b = 5;
  const sum = a + b;
  const multip = a * b;

  it("Проверка сложения", () => {
    expect(sum).toBe(15);
  });
  it("Проверка умножения", () => {
    expect(multip).toBe(50);
  });
  it("Проверка типа сложения", () => {
    expect(typeof sum).toBe("number");
  });
  it("Проверка типа умножения", () => {
    expect(typeof multip).toBe("number");
  });
});
describe("Тесты для второго задания", () => {
  const c = "12sdf";
  const d = "a8v";
  const varLength = (c + d).length;
  it("Happy pass", () => {
    expect(varLength).toBe(8);
  });
  it("Проверка типа", () => {
    expect(typeof varLength).toBe("number");
  });
});

function amount(a) {
  const arr0 = a.split("");
  let userSum = 0;
  for (const i = 1; i <= arr0.length; ) {
    const numArr = +arr0.pop();
    userSum += numArr;
  }
  return userSum;
}

describe("Тесты для третьего задания", () => {
  it("Happy pass", () => {
    expect(amount("123")).toBe(6);
  });
});
