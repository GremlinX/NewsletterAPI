async function getNews(query) {
  // console.log(query);
  try 
  {
    const res = await fetch("http://localhost:8080/api/" + query);
    
    if(!res.ok)
      throw new Error("Failed to fetch");
    
    return res.json();
  } 
  catch (error) 
  {
    console.error("Error fetching news:", error);
    return `Erro ao buscar notícias sobre ${query}. Por favor, tente novamente mais tarde.`;
  }
}

async function getNewsWithSource(query, source) {
  // console.log(query + " " + source);
  try 
  {
    const res = await fetch("http://localhost:8080/api/" + query + "/" + source);

    if (!res.ok)
      throw new Error("Failed to fetch");

    return res.json();
  } 
  catch (error) 
  {
    console.error("Error fetching news:", error);
    return `Erro ao buscar notícias sobre ${query} de ${source}. Por favor, tente novamente mais tarde.`;
  }
}

async function getNewsPaginated(query, pageNumber = 1) {
  try 
  {
    const res = await fetch("http://localhost:8080/api/news/" + query + "?page=" + pageNumber);

    if (!res.ok)
      throw new Error("Failed to fetch");

    return res.json();
  } 
  catch (error) 
  {
    console.error("Error fetching news:", error);
    return `Erro ao buscar notícias sobre ${query}. Por favor, tente novamente mais tarde.`;
  }
}

async function getNewsPaginatedWithSource(query, source, pageNumber = 1) {
  try 
  {
    const res = await fetch("http://localhost:8080/api/news/" + query + "/" + source + "?page=" + pageNumber);

    if (!res.ok)
      throw new Error("Failed to fetch");

    return res.json();
  } 
  catch (error) 
  {
    console.error("Error fetching news:", error);
    return `Erro ao buscar notícias sobre ${query} de ${source}. Por favor, tente novamente mais tarde.`;
  }
}

export async function requestNews(query, source, viewType, pageNumber) {
  try {
    if(viewType === "all") 
    {
      if (source !== "") return await getNewsWithSource(query, source);
      else return await getNews(query);
    } 
    else // viewType === "paginated"
    {
      if(source !== "") return await getNewsPaginatedWithSource(query, source, pageNumber);
      else return await getNewsPaginated(query, pageNumber)
    }
  }
  catch (error) 
  {
    console.error("Error fetching news:", error);
    return `Erro ao buscar notícias. Por favor, tente novamente mais tarde.`;
  }
}
