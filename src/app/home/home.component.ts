import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //Projects
  Acapella = "1jgddUwNk72BuXGTVT8uXdvH0aw0e9cA0";
  AcapellaTitled = "1Cn6hX8GvrawGXZoqzJZ7CJ1ZGpGHv5zL";

  AcapellaZ1 = "1vCY9JfLrakdgGPvs2LruiU_rqv98SVVv";
  AcapelaZ1Titled = "1a3sMWz1dInEH3H-KgQ3SExusq3TImEsd";

  BigMan = "1goaEkNSESX8fZcJ3KqhSXTYLq1pz5sIb";
  BigManTitled = "1TfdHCcJ1PQ0wSLS9p5dtQqw1LQar_xe6";

  Bwof = "1dg3o0CL_EmoOzPhC8aMbFLwFcSxzEVHk";
  BwofTitled = "1Qg8BN2tuQTKmOa252jML_0SyGvTQ3gmV";

  BlackParty = "1jK5CWD_Dn580fChGVk32LxrQRJu-aA2t";

  BannerLink = "https://player.vimeo.com/video/363450178?title=0&byline=0&portrait=0&loop=1&player_id=iframe59217?autoplay=1&autopause=0&muted=1&background=1&playsinline=1";

  GoogleBaseLink = "https://drive.google.com/uc?export=view&id="
  ProjectIDs = [
    this.Acapella, this.AcapellaZ1, this.BigMan, this.Bwof, this.BlackParty
  ];





  constructor() { }

  ngOnInit() {
  }

}