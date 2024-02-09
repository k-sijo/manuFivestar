const teamCarousel = document.querySelector('.team-carousel');
const teamMembers = document.querySelectorAll('.team-member');

teamCarousel.addEventListener('scroll', () => {
    const scrollLeft = teamCarousel.scrollLeft;
    teamMembers.forEach((member, index) => {
        const cardWidth = member.offsetWidth;
        const cardStart = index * cardWidth;
        const cardEnd = cardStart + cardWidth;
        
        if (scrollLeft >= cardStart && scrollLeft < cardEnd) {
            // Add a class to the currently visible team member
            teamMembers.forEach((m) => m.classList.remove('active'));
            member.classList.add('active');
        }
    });
});
