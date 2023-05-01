const search = document.querySelector('#busca');
const userImg = document.querySelectorAll('.user-img');
const userName = document.querySelector('.username');
const userid = document.querySelector('.userid');

const jDate = document.querySelector('.join-date');
const bio = document.querySelector('.user-description p');

const repos = document.querySelector('.repos');
const followers = document.querySelector('.followers');
const following = document.querySelector('.following');

const locationUser = document.querySelector('.location p');
const twitter = document.querySelector('.twitter p');
const website = document.querySelector('.website a');
const company = document.querySelector('.company p');

const error    = document.querySelector('.error');


const fetchApi = async (gitUsername) => {
    const response = await fetch('https://api.github.com/users/' + gitUsername);

    if (response.status === 200) {    
        const gitData = await response.json();
        return gitData;
    }

    return false;
}


const renderUser = async (gitUser) => {
    const gitData = await fetchApi(gitUser);

    //Showing the error when the user is not found
    if (!gitData) {
        error.style.display = 'flex'
    } else {
        error.style.display = 'none';

        // User Bio Data
        userImg.forEach(profileImage => {
            profileImage.src = gitData.avatar_url;
        }); 

        userName.innerHTML = gitData.name;
        userid.innerHTML = '@' + gitData.login;

        // This will select the first 15 elements of the string and remove the Day Name (Sun, Mon, etc) at the start

        // Convert the date to string and then remove what I don't want
        jDate.innerHTML = 'Joined ' + new Date(gitData.created_at).toString().substring(3, 15);
        bio.innerHTML = gitData.bio;

        // User Repo Infomation
        repos.innerHTML = gitData.public_repos;
        followers.innerHTML = gitData.followers;
        following.innerHTML = gitData.following;

        locationUser.innerHTML = checkNull(gitData.location, locationUser.parentElement);
        twitter.innerHTML = checkNull(gitData.twitter_username, twitter.parentElement);
        website.innerHTML = checkNull(gitData.blog, website.parentElement);
        website.href = 'https://' + gitData.blog;
        company.innerHTML = checkNull(gitData.company, company.parentElement);
    }

}

//Checks if the data is null or empty and if it's, it applies the class unavailable and change the text.

function checkNull(data, element) {
    if(data === null) {
        data = 'Not available';
        element.classList.add('unavaliable');
        return data;
    } 

    if(data === "") {
        data = 'Not available';
        element.classList.add('unavaliable');
        return data;
    }

    if (data) {
        element.classList.remove('unavaliable');
        return data;
    }
}

search.addEventListener('change', (e) => {
    e.preventDefault;
    renderUser(search.value);
});


// Nice example profile
renderUser('martins-rafael');

