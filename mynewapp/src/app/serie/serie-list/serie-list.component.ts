import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  standalone: false,
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit{
  series: Array<Serie> = [];
  promedio = 0

  constructor(private serieService: SerieService) {}

  ngOnInit(): void {
    this.serieService.getSeries().subscribe({
      next: data => {
        this.series = data;
        this.promedio = this.promedioS(this.series);   
        console.log('series cargadas:', this.series.length, 'promedio:', this.promedio);
      },
      error: err => console.error('Error cargando series', err)
    });
  }

  private promedioS(lista: Serie[]): number {
    if (!lista.length) return 0;
    let total = 0;
    for (const s of lista) total += s.seasons;
    return total / lista.length;
  }
  selected: Serie | null = null;

 onSelect(s: Serie) {
    this.selected = s;
}

}

