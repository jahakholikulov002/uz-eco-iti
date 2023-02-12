const newsContainer = document.querySelector(".news-container");
        const prevButton = document.querySelector("#prev");
        const nextButton = document.querySelector("#next");

        let currentPage = 0;
        const newsPerPage = 6;

        const news = [
            {
                title: "NASA discovers new planet",
                description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis iste quas obcaecati nihil blanditiis sunt, omnis eligendi delectus ducimus, fuga voluptas amet, minus molestias dignissimos sed? Ex excepturi natus assumenda dolorum nemo praesentium explicabo, officiis quo nulla nihil consequatur delectus sit fugiat eligendi non cum nobis quasi blanditiis necessitatibus? Ipsam vero ipsa illum cumque rerum sint mollitia, est, optio laudantium, reprehenderit quis vitae fuga reiciendis veritatis libero animi soluta sit. Molestiae numquam doloribus reiciendis error, veniam labore iusto nihil blanditiis atque unde ipsa adipisci harum hic odit, sunt corporis quidem, incidunt voluptatum doloremque consequatur minus vel voluptas. Eius, quidem? Quibusdam natus atque beatae eaque eligendi delectus adipisci odio distinctio hic placeat. Eius hic voluptate ex eveniet quis tempore necessitatibus, non laborum tenetur dicta fugiat cupiditate quam quos doloribus debitis id unde! Obcaecati et voluptatibus corporis mollitia laborum, aut dolore veniam provident quas fugit est accusamus eum, odio nemo aperiam rerum pariatur dignissimos cupiditate impedit dolorem labore, tempore eius eligendi vel. A, expedita adipisci qui asperiores quisquam omnis. Harum cum velit architecto ipsum aut vero odio voluptate, aliquid officiis ad accusantium provident illo, repellat tempore et consequatur odit natus nam minima hic possimus eius in maiores. Veritatis beatae libero deleniti maxime dolor fugit ad autem, labore a eius doloremque quae odio excepturi rerum laboriosam obcaecati. Aut natus magnam asperiores assumenda veniam perspiciatis, aliquid inventore hic molestiae ipsum perferendis illum voluptatibus voluptatum repellendus dolorum error. Ducimus minima temporibus, laborum doloribus soluta non officiis labore consequuntur officia error, ad hic doloremque ea consectetur necessitatibus, nihil quod recusandae inventore impedit! Modi minus commodi animi nobis, sequi placeat ipsa expedita, rerum quod labore recusandae quidem sapiente at. Soluta hic nesciunt esse libero eius porro aliquid reiciendis pariatur dicta doloribus vel consectetur, laborum unde nisi sed eos maiores sapiente? Vel autem incidunt debitis rerum? Veritatis placeat consequuntur laboriosam consequatur consectetur veniam repellendus deleniti ipsa dolorum recusandae non quia qui, labore minima possimus dolor tenetur assumenda vitae harum nam sapiente fugit rem eos. Omnis dolore eos, consectetur veniam veritatis facere fuga voluptas soluta, quibusdam sunt voluptatem minima. Distinctio laudantium explicabo maiores nobis quaerat non numquam minus error amet? Cum nobis, autem dolorem in assumenda omnis eius odit modi totam dicta asperiores at ipsam soluta et consequuntur velit similique repudiandae laudantium hic saepe. Totam, perspiciatis consectetur facere qui cupiditate rerum quod sit amet illo cum accusamus fugit, non repellendus sapiente accusantium, veritatis maxime. Delectus error autem asperiores inventore, laudantium non totam ad commodi cum culpa dicta, dolorum velit architecto magni necessitatibus nobis facilis dolorem repellat nihil animi soluta, odit quasi. Vel atque ratione explicabo doloribus aspernatur tenetur velit, commodi eius saepe harum quo incidunt omnis labore unde ad, amet non! Velit ea culpa impedit modi pariatur doloremque accusantium distinctio a error quam reprehenderit autem in minus assumenda, perferendis exercitationem mollitia sed quaerat! Commodi accusamus exercitationem quas possimus, fugit voluptatem, facilis sequi laudantium odio maxime voluptatibus vero non itaque voluptate fuga? Qui quas doloremque debitis! Dolores aperiam sed perferendis nulla voluptatum magni eveniet, neque iusto harum eum tempora non totam soluta. Id placeat porro modi, reprehenderit odit, minus quae consequuntur ipsam, officia maxime dolorem at nisi tempora? Amet at illo deleniti incidunt suscipit quae illum laboriosam molestias delectus iste modi mollitia, veritatis totam sapiente, ipsum in, asperiores debitis ut reprehenderit eaque? Sapiente neque asperiores voluptatum veritatis, minus sequi quos, deserunt, tempore earum aperiam quae animi officia! Vitae quod facere, aut tenetur error cum, ex laudantium qui atque labore asperiores beatae! Voluptate neque enim beatae reprehenderit a minus. Earum saepe tenetur rerum, architecto inventore harum ducimus eos totam, laboriosam corporis qui voluptatibus quasi fugit molestiae magnam beatae dolor consequuntur aliquid nostrum nemo cupiditate. Voluptates fugit eum dolore libero maxime cum possimus dicta laborum sequi sed aut dignissimos reprehenderit, neque sapiente exercitationem repellendus cumque fugiat eveniet esse similique corrupti veniam eos vel. Accusamus libero numquam magnam ipsam necessitatibus aut, at culpa nemo alias aperiam quidem reprehenderit natus voluptatibus, repudiandae enim dolores delectus iusto quam, nihil odio totam. Incidunt error tenetur quidem eos dolores praesentium consequatur, qui, vero nisi dolorem commodi unde eveniet maiores dolorum sequi optio animi ducimus itaque minus suscipit illum excepturi placeat? Harum fugiat debitis nesciunt consequuntur, pariatur tempora ad id perspiciatis corrupti illo nisi excepturi aliquid, vitae sint a laboriosam dolores sapiente. Facilis officia voluptate at nobis, iste, ex corporis debitis expedita architecto, ab dolore. Natus nihil dolorem dignissimos quam eos quisquam recusandae delectus, quia blanditiis in sed doloribus similique totam sint cum maiores explicabo odit temporibus enim nostrum hic esse voluptas nam. Voluptates hic itaque consequuntur repudiandae molestiae ad corporis eos inventore ipsum. Ea saepe debitis cupiditate veniam provident laudantium. Obcaecati odit perferendis sapiente ex voluptate atque aliquid, vel, doloremque, similique consectetur nobis veritatis impedit! Necessitatibus, id odio. Minus explicabo sit aliquid, itaque accusamus labore dolores, architecto quod natus quidem libero inventore? Soluta qui a inventore assumenda architecto fuga necessitatibus. Placeat quos, possimus suscipit quibusdam hic nulla sit nisi, eligendi porro tempore natus. Fuga, officia! Dolorum, quas recusandae consequuntur accusantium possimus ducimus consequatur quam dolor itaque qui voluptatem quos. Tempore soluta aperiam tempora rerum nulla? Ratione, quasi, tempora perferendis vero perspiciatis sunt nam est, ad corrupti temporibus omnis! Quia nostrum quos praesentium provident, excepturi quisquam expedita illo necessitatibus repellendus odit? Odio quia officia suscipit neque repudiandae excepturi beatae ratione itaque placeat commodi non qui minima eum, libero rerum molestiae blanditiis dolores laudantium dolorum quam at. Ipsam porro doloribus numquam! Nulla libero quam aspernatur rerum, nam ipsum hic autem necessitatibus consequatur eos soluta sed mollitia commodi numquam molestias veniam est corrupti sint totam quidem maiores? Blanditiis necessitatibus dolor porro, sequi corporis totam commodi sint, molestias illo iure nobis repellat, harum optio vel quis? Neque eveniet deserunt quidem dolore dolorem natus omnis deleniti accusantium sint eius quod voluptatibus maxime inventore, modi porro, aut alias ut? Ad autem soluta temporibus, veritatis nulla corrupti neque, laudantium rem quam maxime vero illum molestias nisi, expedita harum esse tempora repellendus praesentium. Explicabo minus iure reprehenderit doloremque et. Dolorem cupiditate minus dolor nihil, in non. Vitae autem laudantium voluptate ipsa fugiat dignissimos? Deleniti, maxime.",
                image: "../images/news/news1.jpg",
                date: "Jan 1, 2022"
            },
            {
                title: "Stock market reaches all-time high",
                description: "The stock market reached an all-time high this week, with tech companies leading the way.",
                image: "../images/news/news2.jpg",
                date: "Jan 2, 2022"
            },
            {
                title: "Climate change causes Arctic ice to melt",
                description: "New studies have shown that the Arctic ice is melting at an alarming rate due to climate change.",
                image: "https://via.placeholder.com/300x200",
                date: "Jan 3, 2022"
            },
            {
                title: "New breakthrough in cancer research",
                description: "Researchers have made a new breakthrough in cancer research, finding a potential cure for the disease.",
                image: "https://via.placeholder.com/300x200",
                date: "Jan 4, 2022"
            },
            {
                title: "World leaders meet to discuss global issues",
                description: "World leaders met this week to discuss pressing global issues such as poverty, climate change, and inequality.",
                image: "https://via.placeholder.com/300x200",
                date: "Jan 5, 2022"
            },
            {
                title: "Record-breaking heat wave hits the world",
                description: "A record-breaking heat wave is sweeping the world, causing droughts, wildfires, and heatwaves.",
                image: "https://via.placeholder.com/300x200",
                date: "Jan 6, 2022"
            },
            {
                title: "Robot successfully performs surgery",
                description: "A robot has successfully performed a surgery for the first time, marking a new era in the field of medicine.",
                image: "https://via.placeholder.com/300x200",
                date: "Jan 7, 2022"
            },
            {
                title: "Robot successfully performs surgery",
                description: "A robot has successfully performed a surgery for the first time, marking a new era in the field of medicine.",
                image: "https://via.placeholder.com/300x200",
                date: "Jan 7, 2022"
            },
            {
                title: "Robot successfully performs surgery",
                description: "A robot has successfully performed a surgery for the first time, marking a new era in the field of medicine.",
                image: "https://via.placeholder.com/300x200",
                date: "Jan 7, 2022"
            },
            {
                title: "Robot successfully performs surgery",
                description: "A robot has successfully performed a surgery for the first time, marking a new era in the field of medicine.",
                image: "https://via.placeholder.com/300x200",
                date: "Jan 7, 2022"
            },
            {
                title: "Robot successfully performs surgery",
                description: "A robot has successfully performed a surgery for the first time, marking a new era in the field of medicine.",
                image: "https://via.placeholder.com/300x200",
                date: "Jan 7, 2022"
            },
            {
                title: "Robot successfully performs surgery",
                description: "A robot has successfully performed a surgery for the first time, marking a new era in the field of medicine.",
                image: "https://via.placeholder.com/300x200",
                date: "Jan 7, 2022"
            },
            {
                title: "Robot successfully performs surgery",
                description: "A robot has successfully performed a surgery for the first time, marking a new era in the field of medicine.",
                image: "https://via.placeholder.com/300x200",
                date: "Jan 7, 2022"
            },
            {
                title: "Robot successfully performs surgery",
                description: "A robot has successfully performed a surgery for the first time, marking a new era in the field of medicine.",
                image: "https://via.placeholder.com/300x200",
                date: "Jan 7, 2022"
            },
            {
                title: "Robot successfully performs surgery",
                description: "A robot has successfully performed a surgery for the first time, marking a new era in the field of medicine.",
                image: "https://via.placeholder.com/300x200",
                date: "Jan 7, 2022"
            },
            {
                title: "Robot successfully performs surgery",
                description: "A robot has successfully performed a surgery for the first time, marking a new era in the field of medicine.",
                image: "https://via.placeholder.com/300x200",
                date: "Jan 7, 2022"
            },
            {
                title: "Robot successfully performs surgery",
                description: "A robot has successfully performed a surgery for the first time, marking a new era in the field of medicine.",
                image: "https://via.placeholder.com/300x200",
                date: "Jan 7, 2022"
            },
            {
                title: "First Mars mission successfully lands",
                description: "The first Mars mission has successfully landed and begun its research, marking a new milestone in space exploration.",
                image: "https://via.placeholder.com/300x200",
                date: "Jan 8, 2022"
            }
        ];
    function showPage(page) {
    newsContainer.innerHTML = "";

    const startIndex = page * newsPerPage;
    const endIndex = startIndex + newsPerPage;
    const currentNews = news.slice(startIndex, endIndex);

    for (let i = 0; i < currentNews.length; i++) {
      const newsCard = document.createElement("div");
      newsCard.classList.add("news-card");

      const title = document.createElement("h3");
      title.textContent = currentNews[i].title;
      newsCard.appendChild(title);

      const image = document.createElement("img");
      image.src = currentNews[i].image;
      image.alt = currentNews[i].title;
      newsCard.appendChild(image);

      const description = document.createElement("p");
      description.textContent = currentNews[i].description;
      newsCard.appendChild(description);

      const date = document.createElement("div");
      date.classList.add("date");
      date.textContent = currentNews[i].date;
      newsCard.appendChild(date);

      newsContainer.appendChild(newsCard);
    }
  }

  showPage(0);

  prevButton.addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage--;
      showPage(currentPage);
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentPage < Math.ceil(news.length / newsPerPage) - 1) {
      currentPage++;
      showPage(currentPage);
    }
  }); 