const {GoogleGenerativeAI} = require('@google/generative-ai')
const genAi = new GoogleGenerativeAI({})
async function generateResponse(content){
    const response = await ai.model.generateResponse({
        model: "gemini-2.0-flash",
        contents: content

    })
    return response.text
}

module.exports = {
    generateResponse
}