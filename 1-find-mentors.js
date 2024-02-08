import { mentors } from "./hyf.js";
/**
 * Tjebbe would like help to get a list of possible mentors for a module.
 * Fill in this function that finds all the mentors that can teach the given module.
 *
 * It should return an array of names. So something like:
 *  ['John', 'Mary']
 */

const mentorList = (moduleName)=>{
  
  const possibleMentorList=[]
  mentors.map((item) => {
    if (item.canTeach.includes(moduleName)) {
      possibleMentorList.push(item.name);
    }
  });
  
  return possibleMentorList;
}



const possibleMentorsForModule = (moduleName) => {
  // TODO complete this function

const possibleMentors = mentorList(moduleName);

return possibleMentors;


};
// You can uncomment out this line to try your function
console.log(possibleMentorsForModule("using-apis"));

/**
 * Tjebbe wants to make it even easier for himself.
 * Fill in this function that chooses a random mentor to teach the given module.
 *
 * It should return a single name.
 */
const findMentorForModule = (moduleName) => {
  // TODO complete this function


  const randomMentors = mentorList(moduleName);
  const indexSelector = Math.floor((Math.random() * randomMentors.length) | 0);
  
  const randomMentor = randomMentors[indexSelector]

  return randomMentor;

};
// You can uncomment out this line to try your function
console.log(findMentorForModule("javascript"));
