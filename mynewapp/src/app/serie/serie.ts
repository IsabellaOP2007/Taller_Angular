export class Serie{
    num:number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    link: string;
    image: string;
    webpage?: string;
    poster?: string;

    constructor(numE: number,nameE: string, channelE:string, seasonsE:number, descriptionE: string, linkE: string, imageE:string,
        Webpage: string, Poster: string
     ){
        this.num = numE;
        this.name = nameE;
        this.channel=channelE;
        this.seasons=seasonsE
        this.description = descriptionE;
        this.link = linkE;
        this.image = imageE;
        this.webpage = Webpage;
        this.poster = Poster;
    }
}