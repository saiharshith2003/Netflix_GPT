import OpenAI from 'openai';
import { GPT_API } from './logos';

const openai = new OpenAI({
    apiKey: GPT_API,
    dangerouslyAllowBrowser: true
});

export default openai