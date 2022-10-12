export const technologiesDataLoader = async() => {
    const technologiesData = await fetch('https://openapi.programming-hero.com/api/quiz');
    const technologiesObj = await technologiesData.json();
    const technologies = technologiesObj.data;
    
    return technologies;
}