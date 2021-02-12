/**
 * How to annotate params and return value
 *
 * There is no inference for parms
 * but there is inference for retrun value
 * best practice is to annotate both
 */
const add = (a: number, b: number): number => {
    return a + b;
};

/**
 * Example to why to annotate return value
 * Doesnt throw error for not including the `return` keyword
 */
const subtract = (a: number, b: number) => {
    a - b;
};

function divide(a: number, b: number): number {
    return a / b;
}

/**
 * When nothing is returned including null and undefined use keyword void
 */
const logggr = (message: string): void => {
    console.log(message);
};

/**
 * If there is a possiblity of a error being thrown, notate code with what the return value SHOULD be
 * in this case, it should return string
 */
const toLowerCase = (message: string): string => {
    if (!message) {
        throw new Error('missing message');
    }

    return message.toLowerCase();
};

// Destructuring

const forecast = {
    date: new Date(),
    weather: 'sunny',
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
    console.log(forecast.date);
    console.log(forecast.weather);
};

const logWeatherDestrc = ({
    date,
    weather,
}: {
    date: Date;
    weather: string;
}): void => {
    console.log(date);
    console.log(weather);
};
