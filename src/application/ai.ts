import { Request, Response, NextFunction } from "express";

import { OpenAI } from "openai";
import Hotel from "../infrastructure/entities/Hotel";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const messages: { role: "user" | "assistant"; content: string }[] = [];

export const respondToAIQuery = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { query } = req.body;

        // messages.push({
        //     role: "user",
        //     content: query,
        // });

        const hotelsData = await Hotel.find();

        const response = await openai.responses.create({
            model: "gpt-4o",
            instructions: `You are a helpful assistant that helps users to choose a hotel for a vibe they describe. the availble hotels are given below. Based on that recommend them a hotel along with the information: ${JSON.stringify(
                hotelsData
            )}`,
            input: query
        });

        const aiResponse = (response.output as Array<{ type: string; content: Array<{ type: string; text: string }> }>)
            .filter((o) => o.type === "message")
            .map((el) => {
                return (el.content as Array<{ type: string; text: string }> )
                    .filter((c) => c.type === "output_text")
                    .map((t) => t.text)
                    .join("\n");
            })
            .join("\n");

        //console.log(aiResponse);

        messages.push({
            role: "assistant",
            content: aiResponse,
        });

        res.status(200).json({
            response: aiResponse,
        });

    } catch (error) {
        //console.error("❌ Error in AI call:", error);
        next(error);
    }
};