const request = require("supertest");
const app = require("../src/server");

describe("GET /tasks", () => {
  it("returns all tasks", async () => {
    const res = await request(app).get("/tasks");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });
});

describe("GET /tasks/search", () => {
  it("returns matching tasks for a successful search (case-insensitive)", async () => {
    const res = await request(app).get("/tasks/search").query({ q: "buy" });
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
    expect(
      res.body.some((t) => t.title.toLowerCase().includes("buy"))
    ).toBe(true);
  });

  it("returns an empty array when no tasks match", async () => {
    const res = await request(app).get("/tasks/search").query({ q: "no-such-task" });
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBe(0);
  });

  it("returns 400 when q is missing or empty", async () => {
    const res = await request(app).get("/tasks/search");
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("error", "Query parameter q is required");
  });
});