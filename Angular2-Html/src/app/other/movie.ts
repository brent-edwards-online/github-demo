export interface IExtension{
    extensionId: number;
    extensionName: string;
}

export interface IMovie {
    movieId: number;
    movieName: string;
    movieStar: string;
    releaseDate: string;
    price: number;
    starRating: number;
    imageUrl: string;
    movieExtension: IExtension;
    movieExtensions: IExtension[];
}
