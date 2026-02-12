import { describe, test, expect, vi } from "vitest";
import { getRandomDogImage } from "../services/dogService";

describe("dogService.ts", () => {
  test("should return imageUrl from message and status success", async () => {
    const mockedApiData = {
      message: "https://images.dog.ceo/breeds/terrier-welsh/lucy.jpg",
      status: "success",
    };

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: vi.fn().mockResolvedValue(mockedApiData),
    } as any);

    const result = await getRandomDogImage();

    expect(result.imageUrl).toBe(mockedApiData.message);
    expect(result.status).toBe("success");
    expect(fetch).toHaveBeenCalledOnce();
  });

  test("should reject and throw error when API returns ok false", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 500,
    } as any);

    await expect(getRandomDogImage()).rejects.toThrow(
      "Failed to fetch dog image: Dog API returned status 500"
    );

    expect(fetch).toHaveBeenCalledOnce();
  });
});