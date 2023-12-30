

const Usegenre = (selectedGenre) => {
    if (selectedGenre.length < 1) return "";
 const ids=selectedGenre.map((g)=>g.id)
 return ids.reduce((acc, curr) => acc + "," + curr);
}

export default Usegenre