import { Users } from "./users";
import { userScores } from "./Scoresdata";
// import { idText } from "typescript";





for(let i = 0; i < Users.length; i ++){
  if(Users[i].age >= 20){
    console.log(Users[i].age + " " + Users.length)
  }
}

for(const User of Users){
    if(User.gender === "Female" && User.age <= 19){
      console.log(User.gender + " " + User.age + " " + User.first_name)
    }
  }
  
  console.log(" ")
  
  for(let i = 0; i < Users.length; i++){
      if(Users[i].gender === "Male" && Users[i].age <= 18 && Users[i].first_name){
        console.log(Users[i].gender + " " + Users[i].age + " " + Users[i].first_name)
      }
    }


const youths = Users.find((Users) => Users.first_name.startsWith(("J")))

console.log(youths?.first_name)
    
    
  const allUsers = Users.map((user) => {
    return {
        isActive:
    }
  })

// const allUsers = Users.map((Users) => {
//     return{
//         id: Users.id,
// 		first_name: Users.first_name,
// 		last_name: Users.last_name,
// 		email: Users.email,
// 		gender: Users.gender,
// 		isActive: Users.isActive,
// 		age: Users.age,
         
//     }
// })
// console.log(allUsers.length)


const allActiveUsers = Users.filter((User) => User. )

console.log(allActiveUsers.length);

const youth = Users.filter((User) => {
    if(User.age >= 18 && User.age <= 45){
        return(
            User
        )
    }

        
})

const children = Users.filter((User) => {
    if(User.age >= 1 && User.age <= 18){
        return(
            User
        )
    }

        
})

// console.log(children.length)


const female = Users.filter((User) => {
    if(User.gender === "Female" && User.age < 18 ){
        return(User)
    }
})
// console.log(female)

const ser = Users.map((Users) => {
    return{
        first_name: Users.first_name,
        last_name: Users.last_name
    }
})
// console.log(ser)



const femaleUsers = Users.filter(u => u.gender === "Female" && !u.isActive).map(u => ({ ...u, year: new Date().getFullYear() - u.age }));

// console.log(femaleUsers)



const userActive = userScores.map(u => userScores)

// console.log(userActive)

const activeUser = userScores.find((user) => {
    if(user.age > 1 && user.age <= 20){
        return user
    }
})

// console.log(activeUser)


const userScore = userScores.filter((us) => {
    if(us.score < 50){
        return userScores
    }
})

// console.log(userScore)

// userScores.sort()
// console.log(userScores)

const allScores = userScores.filter((user) => {
    if(user.score > 55){
        return user.score
    }
})

// console.log(allScores.length)

const activeuser = userScores.filter (user => {
    return user.isActive
})

// console.log(activeuser.length)

const alluser = userScores.map((user) => {
    if(user.score >= 50){
        return{
            name: user.Name,
            id: user.id,
            // age: user.age,
            // class: user.class,
            score: user.score / 2
        }
    }else{
        return user.score
    }
})


const allusers = userScores.map((user) => {
    return user.score *2
})

// console.log(allusers)

const scores = userScores.filter(u => u.score < 50 )


const filtered = userScores.filter((u) => {
    if(u.score >= 50){
        return
    }
})




// console.log(alluser)