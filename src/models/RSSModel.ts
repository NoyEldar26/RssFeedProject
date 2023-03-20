export class RSSModel{
    feed:Feed=new Feed();
}
export class Feed{
    id:string;
    title:string;
    link:string;
    updated:Date;
    entry:EntryModel[];
}
export class EntryModel{
    id:string;
    title:string;
    content:ContentModel[]=new Array();
    link:LinkModel[]=new Array();
}
export class ContentModel{
    _ : any;
}
export class LinkModel{
    $ : DollerModel[]=new Array();
}
export class DollerModel{
    href:string;
}