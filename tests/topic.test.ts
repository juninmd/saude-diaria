import { expect, test } from "bun:test";
import { topic } from "../src/topic.ts";

test("define topic with configured health feeds", () => {
  expect(topic.name).toBe("saude-diaria");
  expect(topic.title).toBe("Saúde Diária");
  expect(topic.emoji).toBe("🩺");
  expect(topic.feeds.length).toBeGreaterThan(0);
  expect(topic.systemPrompt).toContain("curador de saúde");
});
