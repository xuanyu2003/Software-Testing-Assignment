import { describe, test, expect, vi, beforeEach } from "vitest";
import { getDogImage } from "../controllers/dogController";
import * as dogService from "../services/dogService";

const createMockResponse = () => {
  const res: any = {};
  res.status = vi.fn().mockReturnThis();
  res.json = vi.fn();
  return res;
};

describe("dogController.ts - positive test", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  test("should return success true and dog data from service", async () => {
    const mockedServiceData = {
      imageUrl: "https://images.dog.ceo/breeds/terrier-welsh/lucy.jpg",
      status: "success",
    };

    vi.spyOn(dogService, "getRandomDogImage").mockResolvedValue(mockedServiceData);

    const req: any = {};
    const res = createMockResponse();

    await getDogImage(req, res);

    expect(dogService.getRandomDogImage).toHaveBeenCalledOnce();

    expect(res.json).toHaveBeenCalledWith({
      success: true,
      data: mockedServiceData,
    });
  });
});