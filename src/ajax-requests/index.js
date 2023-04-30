const COHORT_NAME = '2301-ftb-et-web-pt'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export const registerUser = async (user) => {


    console.log(user)

     try {
      const response = await fetch(
        `${BASE_URL}/users/register`, {
     method: "POST",
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({
           user
         })
       });
       const result = await response.json();
 // You can log ▲▲▲ the result
 // here ▼▼▼ to view the json object before returning it
       console.log(result)
       return result
     } catch (err) {
      console.error(err);
    }
};

export const login = async (user) => {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user
      }),
    });
    const result = await response.json();
    console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
}

export const fetchPosts = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })

    const result = await response.json();
    //console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
}

export const makePost = async (post, token) => {

  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        post
      })
    });
    const result = await response.json();
    //console.log(result);
    return result
  } catch (err) {
    alert(err.message);
    console.error(err);
  }
}

export const deletePost = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/5e8d1bd48829fb0017d2233b`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    const result = await response.json();
    console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
}


export const myData = async (token) => {

  try {
    const response = await fetch(`${BASE_URL}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });
    const result = await response.json();
    console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
}