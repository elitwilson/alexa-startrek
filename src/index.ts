import { SkillBuilders, getRequestType, HandlerInput } from 'ask-sdk-core';

const LaunchRequestHandler = {
    canHandle(handlerInput: HandlerInput): boolean {
        return getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput: HandlerInput) {
        const speakOutput = 'Hello, World!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const skillBuilder = SkillBuilders.custom();

exports.handler = skillBuilder
    .addRequestHandlers(
        LaunchRequestHandler
        // Add more handlers here
    )
    .lambda();

// import { SkillBuilders } from 'ask-sdk-core';
// import axios from 'axios';

// // A "Launch Request" is what Alexa sends your skill when it first starts up
// const LaunchRequestHandler = {
//   // This function determines if the current handler can handle the incoming request
//   canHandle(handlerInput: any) {
//     console.log(handlerInput)
//     return true; // Add more conditions to handle specific launch request.
//   },
//   async handle(handlerInput: any) {
//     const prompt = "Hello, what can I do for you?";
//     return handlerInput.responseBuilder
//       .speak(prompt)
//       .getResponse();
//   }
// };

// // Alex Skill's main entrypoint. This is what AWS Lambda will call when the skill is invoked.
// export const handler = SkillBuilders.custom()
//   .addRequestHandlers(
//     LaunchRequestHandler,
//     // Add more handlers here
//   )
//   .lambda();
