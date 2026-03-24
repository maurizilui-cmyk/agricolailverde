// ===== DATA =====
const DATA = {
  specie: [
    'Abies alba L. - abete bianco','Abies cephalonica Loudon - abete greco','Abies nebrodensis (Lojac.) Mattei - abete dei Nebrodi','Abies nordmanniana (S.) Spach - abete del Caucaso','Acacia dealbata Link - mimosa','Acer campestre L. - acero campestre','Acer monspessulanum L. - acero minore','Acer negundo L. - acero americano','Acer opulifolium Chaix - acero alpino','Acer platanoides L. - acero riccio','Acer pseudoplatanus L. - acero di monte','Acer rubrum L. - acero scarlatto','Acer saccharum Marsh. - acero del Canada','Aesculus hippocastanum L. - ippocastano','Aesculus pavia L. - pavia','Ailanthus altissima Swingle - ailanto','Alnus cordata (Loisel.) Duby - ontano napoletano','Alnus glutinosa L. - ontano nero','Betula pendula Roth - betulla','Carpinus betulus L. - carpino bianco','Castanea sativa Mill. - castagno','Catalpa bignonioides Walter - catalpa','Cedrus atlantica (Endl.) Manetti - cedro dell\'Atlante','Cedrus deodara (Roxb.) G.Don - cedro dell\'Himalaya','Cedrus libani A.Rich. - cedro del Libano','Celtis australis L. - bagolaro','Cercis siliquastrum L. - albero di Giuda','Chamaerops humilis L. - palma nana','Corylus avellana L. - nocciolo','Cupressus sempervirens L. - cipresso comune','Eucalyptus camaldulensis Dehnh. - eucalipto','Fagus sylvatica L. - faggio','Fraxinus angustifolia Vahl - frassino ossifillo','Fraxinus excelsior L. - frassino comune','Fraxinus ornus L. - orniello','Ginkgo biloba L. - ginkgo','Gleditsia triacanthos L. - gleditsia','Juglans nigra L. - noce nero','Juglans regia L. - noce comune','Laburnum anagyroides Medik. - maggiociondolo','Larix decidua Mill. - larice','Laurus nobilis L. - alloro','Ligustrum lucidum W.T.Aiton - ligustro lucido','Liquidambar styraciflua L. - liquidambar','Liriodendron tulipifera L. - liriodendro','Magnolia grandiflora L. - magnolia sempreverde','Melia azedarach L. - melia','Morus alba L. - gelso bianco','Morus nigra L. - gelso nero','Olea europaea L. - olivo','Phoenix canariensis hort. ex Chabaud - palma delle Canarie','Phoenix dactylifera L. - palma da datteri','Picea abies (L.) H.Karst. - abete rosso','Picea pungens Engelm. - abete del Colorado','Pinus halepensis Mill. - pino d\'Aleppo','Pinus nigra J.F.Arnold - pino nero','Pinus pinaster Aiton - pino marittimo','Pinus pinea L. - pino domestico','Pinus sylvestris L. - pino silvestre','Platanus acerifolia (Aiton) Willd. - platano','Populus alba L. - pioppo bianco','Populus nigra L. - pioppo nero','Populus tremula L. - pioppo tremulo','Populus x canadensis Moench - pioppo canadese','Prunus avium (L.) L. - ciliegio selvatico','Prunus cerasifera Ehrh. - mirabolano','Quercus cerris L. - cerro','Quercus ilex L. - leccio','Quercus petraea (Matt.) Liebl. - rovere','Quercus pubescens Willd. - roverella','Quercus robur L. - farnia','Quercus suber L. - sughera','Robinia pseudoacacia L. - robinia','Salix alba L. - salice bianco','Salix babylonica L. - salice piangente','Sophora japonica L. - sofora','Sorbus aria (L.) Crantz - farinaccio','Sorbus domestica L. - sorbo domestico','Tilia cordata Mill. - tiglio selvatico','Tilia platyphyllos Scop. - tiglio nostrano','Tilia x europaea L. - tiglio comune','Ulmus minor Mill. - olmo campestre','Ulmus pumila L. - olmo siberiano','Washingtonia filifera (Linden ex André) H.Wendl. - palma di Washington'
  ],
  dimora: ['prato','scarpata','terrapieno','terreno coltivato','terreno incolto','buco asfalto','area di pertinenza','banchina stradale','rimboschimento','tornello','aiuola','bosco','aiuola spartitraffico','alberata stradale','parcheggio','gruppo/boschetto','giardino recente','filare arboreo','piazza','cimitero','parco recente','giardino storico','parco storico','marker'],
  stadio: ['plantula','giovane pianta','albero giovane','albero adulto','albero maturo','albero senescente','albero veterano'],
  stadioPalme: ['palma giovane','palma adulta','palma senescente'],
  stadioPop: ['piantagione'],
  posSociale: ['oppressa','dominata','intermedia','codominante','dominante margine','dominante interna','predominante','libera (p giovane)','isolata'],
  localiz: ['aree rurali','aree rurali urbaniz.','aree industriali','periferia recente','periferia antica','luoghi villeggiatura','centro città','centro storico'],
  vincoli: ['---','> soglia comunale','paesaggistico','dichiaraz. di rilevanza','storico-architettonico','monumentale'],
  coerFito: ['A: optimum','B: elevata','C: buona','D: scadente','E: incoerente'],
  conflitti: ['assenti','asfalto','pavimentazione','cavi storrenaei','cavi aerei','cordoli','fabbricati','lampioni','manufatti','marciapiedi','muri','oggetti inglobati','veg. erbacea','arbusti','lianose','altri alberi','cartellonistica','ps','s','ms'],
  agentiCarie: ['non segni cariogeni','carie non determin.','Abortiporus biennis','Agrocybe aegerita','Armillaria sp.','Cerrena unicolor','Collybia fusipes','Chondrostereum p.','Coniophora puteana','Daedalea quercina','Daldinia concentrica','Fistulina epatica','Fomes fomentarius','Fomitopsis hiberica','Fomitopsis pinicola','Ganoderma applanatum','Ganoderma australe','Ganoderma adspersum','Ganoderma lipsiense','Ganoderma lucidum','Ganoderma resinaceum','Grifola frondosa','Heterobasidion annosum','Inonotus cuticularis','Inonotus hispidus','Inonotus dryadeus','Inonotus rickii'],
  altriPatogeni: ['non segni fitopatie','patog. non determinati','Processionaria','Tomicus','Punteruolo rosso','Paisandisia','Grafiosi','Tortrice','Cancro corticale','Cancro colorato','Scolitidi','Cerambicidi','altro'],
  monitoraggio: ['6 mesi','1 anno','2 anni','3 anni','4 anni','5 anni','6 anni','10 anni','subito','stagionale','non definito'],
  urgenza: ['subito','< 6 mesi','1 anno','2 anni','3 anni','4 anni','al bisogno','opzionale','differibile','consigliato','non definito'],
  condizSalute: [
    'Condizioni vegetative e fitosanitarie ottimali. Albero integro',
    'Condizioni vegetative e/o fitosanitarie ottimali. Albero lievemente alterato nella struttura',
    'Condizioni vegetative e/o fitosanitarie buone o comunque non tali da condizionare la salute e la vigoria',
    'Condizioni vegetative e/o fitosanitarie buone o comunque non tali da condizionare la salute e la vigoria. Albero strutturalmente alterato',
    'Condizioni vegetative e/o fitosanitarie mediocri, che limitano l\'efficienza funzionale. Salute e/o vigoria ridotte',
    'Condizioni vegetative e/o fitosanitarie mediocri. Albero strutturalmente alterato',
    'Condizioni vegetative e/o fitosanitarie scadenti, che ne condizionano la salute e l\'aspettativa di vita',
    'Condizioni vegetative e/o fitosanitarie scadenti. Albero molto alterato strutturalmente',
    'Condizioni vegetative e/o fitosanitarie pessime',
    'Condizioni vegetative e/o fitosanitarie pessime. Albero fortemente deperiente, strutturalmente molto alterato',
    'Albero morto in piedi'
  ],
  tipoBersaglio: ['proprietà','occupazione','pedoni/ciclisti','traffico 30 Km/h','traffico 50 km/h','traffico 70 Km/h','traffico 90 Km/h','traffico 110 km/h'],
  gradoPericolo: ['1 - Gravissimi (ced. 1/1-1/5)','2 - Gravi (ced. 1/5-1/50)','3 - Significativi (ced. 1/50-1/500)','4 - Incerti (ced. 1/500-1/5K)','5 - Moderati (ced. 1/5K-1/50K)','6 - Bassi (ced. 1/50K-1/500k)','7 - Trascurabili (ced. 1/500K-1/1M)','0 x sospet - Valutazione sospesa','0 x difetto - Valutazione sospesa','0 x costituz - Valutazione sospesa','N.S. - Non significativo'],
  gradoPericoloTriage: ['1','2','3','4','5','6','7'],
  // ORD anatomy defects
  caratteriZolla: ['compattazione','competizione radicale','erosione','pavimentazione','ristagno idrico','rottura suolo (fessure)','scavi o trincee','sollevamento manufatti','platea radicale','ricarico zolla','sollevamento zolla','sprofondamento zolla','zolla asimmetrica','zolla danneggiata','zolla limitata / ridotta','zolla/suolo separati'],
  caratteriColletto: ['colletto a contrafforti','colletto a gradino','colletto a imbuto','colletto a palafitta','colletto asimmetrico','colletto azzampato','colletto cilindrico','colletto cordonato','colletto normale','colletto ovalizzato','colletto sepolto','affondam in comprex','cordoni xilematici','cordoni non più attivi','corna di ariete','piega a S'],
  caratteriFusto: ['fusto regolare','fusto bi (tri)forcato','fusto policormico','fusto asimmetrico','fusto costolato','fusto sciabolato','perdita leader','codominanza','aree funzionali inattive','carico in punta','corna di ariete','cordoni xilematici','inclinaz. Arcuatura','inclinaz. Sciabolatura','inclinazione lineare','rigonf. anello','cucitura','pieghe fisarmonica'],
  caratteriCastello: ['cast. con sbrancamento','castello a cespuglio','castello a torrioni','castello allargato','castello assente','castello regolare','aree funzionali inattive','capitozzatura','corna di ariete','cucitura','reiterati ageotropi','reiterati ortotropi','reiterati plagiotropi','spiralizzazione fibre','ponte xilematico su cretto','pieghe fisarmonica'],
  caratteriRamif: ['conforme all\'habitus','rami candel/pennello','rami sinuosi/arcuati','ramificaz insufficiente','ramificaz lacunosa','aree funzionali inattive','branca deperiente','cedimenti pregressi','end loading/codaleone','fusticini epicormici','pali su branche','disseccamenti branche','disseccamenti rami','disseccamenti ramuli','corna di ariete','cucitura'],
  caratteriChioma: ['conforme all\'habitus','chioma a bandiera','chioma a pennello','chioma asimmetrica','chioma diradata','chioma esposta','chioma lacunosa','chioma separata','chioma spalcata','chioma ridotta','chioma sana','chioma stressata','chioma resiliente','ripiegamento della chioma','discesa della cima','deperim. irreversibile','assenza leader']
};

// Risk tables lookup
const RISK_TABLE = {
  // pericolo x bersaglio → classe rischio (1=massimo, 7=minimo)
  // Simplified mapping based on ARETE logic
  '1-1': 1, '1-2': 1, '1-3': 1, '1-4': 1, '1-5': 2, '1-6': 3, '1-7': 3,
  '2-1': 1, '2-2': 1, '2-3': 1, '2-4': 2, '2-5': 3, '2-6': 4, '2-7': 4,
  '3-1': 1, '3-2': 1, '3-3': 2, '3-4': 3, '3-5': 4, '3-6': 5, '3-7': 5,
  '4-1': 1, '4-2': 2, '4-3': 3, '4-4': 4, '4-5': 5, '4-6': 5, '4-7': 6,
  '5-1': 2, '5-2': 3, '5-3': 4, '5-4': 5, '5-5': 5, '5-6': 6, '5-7': 6,
  '6-1': 3, '6-2': 4, '6-3': 5, '6-4': 5, '6-5': 6, '6-6': 6, '6-7': 7,
  '7-1': 3, '7-2': 4, '7-3': 5, '7-4': 6, '7-5': 6, '7-6': 7, '7-7': 7,
};
const RISK_LABELS = {
  1: { label: 'Rischio inaccettabile', sub: 'Abbattimento o eliminazione del rischio', class: 'risk-1' },
  2: { label: 'Rischio inaccettabile', sub: 'Abbattimento o eliminazione del rischio', class: 'risk-1' },
  3: { label: 'Rischio tollerabile per accordo', sub: 'Se il valore è molto elevato', class: 'risk-2' },
  4: { label: 'Rischio tollerabile ALARP', sub: 'Valutare costi/benefici del controllo', class: 'risk-3' },
  5: { label: 'Rischio tollerabile ALARP', sub: 'Valutare costi/benefici del controllo', class: 'risk-3' },
  6: { label: 'Rischio tollerabile', sub: 'Individuare interventi affinché rimanga ALARP', class: 'risk-4' },
  7: { label: 'Rischio largamente accettabile', sub: 'Nessun intervento urgente necessario', class: 'risk-5' },
};

// ===== STATE =====
let currentTab = 'home';
let formData = { trgp: {}, trgs: {}, ord: {} };
let savedForms = JSON.parse(localStorage.getItem('arete_forms') || '[]');
let editingId = null;
let archiveFilter = 'all';

// ===== UTILS =====
function sel(id) { return document.getElementById(id); }
function today() { return new Date().toISOString().split('T')[0]; }
function uid() { return Date.now().toString(36) + Math.random().toString(36).substr(2,5); }

function showToast(msg, type='') {
  const t = sel('toast');
  t.textContent = msg;
  t.className = 'toast' + (type ? ' '+type : '');
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2600);
}

function makeSelect(name, options, placeholder='Seleziona...', value='') {
  const opts = options.map(o => `<option value="${o}" ${o===value?'selected':''}>${o}</option>`).join('');
  return `<select class="form-select" name="${name}" onchange="onFieldChange('${name}',this.value)">
    <option value="">${placeholder}</option>${opts}</select>`;
}

function makeInput(name, type='text', placeholder='', value='', extra='') {
  return `<input class="form-input" type="${type}" name="${name}" placeholder="${placeholder}" value="${value}" ${extra} oninput="onFieldChange('${name}',this.value)">`;
}

// ===== FORM BUILDERS =====
function buildTRGP() {
  const d = formData.trgp;
  return `
  <div class="form-section">
    <div class="form-section-header"><span class="section-icon">📋</span>Dati Generali</div>
    <div class="form-grid">
      <div class="form-row cols-2">
        <div class="form-field">
          <label class="form-label">Rilevatore</label>
          ${makeInput('rilevatore','text','Nome rilevatore',d.rilevatore||'')}
        </div>
        <div class="form-field">
          <label class="form-label">Data</label>
          ${makeInput('data','date','',d.data||today())}
        </div>
      </div>
      <div class="form-field">
        <label class="form-label">Specie</label>
        ${makeSelect('specie',DATA.specie,'Seleziona specie...',d.specie||'')}
      </div>
      <div class="form-row cols-2">
        <div class="form-field">
          <label class="form-label">ID Albero</label>
          ${makeInput('id_albero','text','ID / N°',d.id_albero||'')}
        </div>
        <div class="form-field">
          <label class="form-label">N° Piante</label>
          ${makeInput('n_piante','number','N°',d.n_piante||'')}
        </div>
      </div>
      <div class="form-field">
        <label class="form-label">Ubicazione</label>
        ${makeInput('ubicazione','text','Via / Luogo',d.ubicazione||'')}
      </div>
    </div>
  </div>

  <div class="form-section">
    <div class="form-section-header"><span class="section-icon">🌿</span>Caratteristiche dell'Albero</div>
    <div class="form-grid">
      <div class="form-row cols-3">
        <div class="form-field">
          <label class="form-label">H <span class="unit">(m)</span></label>
          ${makeInput('h_albero','number','Alt.',d.h_albero||'','step="0.5" min="0"')}
        </div>
        <div class="form-field">
          <label class="form-label">D tr <span class="unit">(cm)</span></label>
          ${makeInput('d_tronco','number','Ø tr.',d.d_tronco||'','step="1" min="0"')}
        </div>
        <div class="form-field">
          <label class="form-label">D ch <span class="unit">(m)</span></label>
          ${makeInput('d_chioma','number','Ø ch.',d.d_chioma||'','step="0.5" min="0"')}
        </div>
      </div>
      <div class="form-row cols-3">
        <div class="form-field">
          <label class="form-label">D br <span class="unit">(cm)</span></label>
          ${makeInput('d_branca','number','Ø br.',d.d_branca||'','step="1" min="0"')}
        </div>
        <div class="form-field">
          <label class="form-label">L br <span class="unit">(m)</span></label>
          ${makeInput('l_branca','number','L br.',d.l_branca||'','step="0.5" min="0"')}
        </div>
        <div class="form-field">
          <label class="form-label">H br <span class="unit">(m)</span></label>
          ${makeInput('h_branca','number','H br.',d.h_branca||'','step="0.5" min="0"')}
        </div>
      </div>
      <div class="form-field">
        <label class="form-label">H bersaglio <span class="unit">(m)</span></label>
        ${makeInput('h_bersaglio','number','Altezza bersaglio',d.h_bersaglio||'','step="0.5" min="0"')}
      </div>
      <div class="form-row cols-2">
        <div class="form-field">
          <label class="form-label">Dimora</label>
          ${makeSelect('dimora',DATA.dimora,'Dimora...',d.dimora||'')}
        </div>
        <div class="form-field">
          <label class="form-label">Stadio</label>
          ${makeSelect('stadio',[...DATA.stadio,...DATA.stadioPop],'Stadio...',d.stadio||'')}
        </div>
      </div>
      <div class="form-row cols-2">
        <div class="form-field">
          <label class="form-label">Pos. Sociale</label>
          ${makeSelect('pos_sociale',DATA.posSociale,'Posizione...',d.pos_sociale||'')}
        </div>
        <div class="form-field">
          <label class="form-label">Localizzazione</label>
          ${makeSelect('localiz',DATA.localiz,'Localiz...',d.localiz||'')}
        </div>
      </div>
      <div class="form-field">
        <label class="form-label">Vincoli</label>
        ${makeSelect('vincoli',DATA.vincoli,'Vincoli...',d.vincoli||'')}
      </div>
    </div>
  </div>

  <div class="form-section">
    <div class="form-section-header"><span class="section-icon">⚠️</span>Conflitti (max 4)</div>
    <div class="form-grid">
      <div class="form-row cols-2">
        ${[1,2,3,4].map(i => `<div class="form-field">
          <label class="form-label">Conflitto ${i}</label>
          ${makeSelect('conflitto_'+i,DATA.conflitti,'Tipo...',d['conflitto_'+i]||'')}
        </div>`).join('')}
      </div>
    </div>
  </div>

  <div class="form-section">
    <div class="form-section-header"><span class="section-icon">🔬</span>Grado di Pericolo Percepito</div>
    <div class="form-grid">
      <div class="form-field">
        <label class="form-label">Rottura Branca/Rami</label>
        <div class="danger-selector" id="danger-branca-trgp">${buildDangerBtns('branca','trgp',d.branca||'')}</div>
        <div class="danger-hint" id="hint-branca-trgp">${getDangerHint(d.branca)}</div>
      </div>
      <div class="form-field">
        <label class="form-label">Rottura Tronco/Castello</label>
        <div class="danger-selector" id="danger-tronco-trgp">${buildDangerBtns('tronco','trgp',d.tronco||'')}</div>
        <div class="danger-hint" id="hint-tronco-trgp">${getDangerHint(d.tronco)}</div>
      </div>
      <div class="form-field">
        <label class="form-label">Rottura Colletto</label>
        <div class="danger-selector" id="danger-colletto-trgp">${buildDangerBtns('colletto','trgp',d.colletto||'')}</div>
        <div class="danger-hint" id="hint-colletto-trgp">${getDangerHint(d.colletto)}</div>
      </div>
      <div class="form-field">
        <label class="form-label">Rib./Sciv. Zolla Radicale</label>
        <div class="danger-selector" id="danger-zolla-trgp">${buildDangerBtns('zolla','trgp',d.zolla||'')}</div>
        <div class="danger-hint" id="hint-zolla-trgp">${getDangerHint(d.zolla)}</div>
      </div>
    </div>
  </div>

  <div class="form-section">
    <div class="form-section-header"><span class="section-icon">🎯</span>Bersaglio</div>
    <div class="form-grid">
      <div class="form-field">
        <label class="form-label">Tipo di Bersaglio</label>
        ${makeSelect('tipo_bersaglio',DATA.tipoBersaglio,'Tipo bersaglio...',d.tipo_bersaglio||'')}
      </div>
      <div class="form-field">
        <label class="form-label">Classe Bersaglio (1-7)</label>
        ${makeInput('classe_bersaglio','number','1-7',d.classe_bersaglio||'','min="1" max="7"')}
      </div>
    </div>
  </div>

  <div class="form-section">
    <div class="form-section-header"><span class="section-icon">🧪</span>Condizioni di Salute</div>
    <div class="form-grid">
      <div class="form-field">
        <label class="form-label">Condizioni Salute e Vigoria</label>
        ${makeSelect('condiz_salute',DATA.condizSalute,'Condizioni...',d.condiz_salute||'')}
      </div>
      <div class="form-row cols-2">
        <div class="form-field">
          <label class="form-label">Monitoraggio</label>
          ${makeSelect('monitoraggio',DATA.monitoraggio,'Freq...',d.monitoraggio||'')}
        </div>
        <div class="form-field">
          <label class="form-label">Urgenza</label>
          ${makeSelect('urgenza',DATA.urgenza,'Urgenza...',d.urgenza||'')}
        </div>
      </div>
    </div>
  </div>

  <div class="form-section">
    <div class="form-section-header"><span class="section-icon">📊</span>Calcolo Rischio</div>
    <div class="form-grid">
      <div class="form-field">
        <label class="form-label">Risultato Triage</label>
        <div class="computed-field highlight" id="result-trgp">${computeRiskDisplay('trgp')}</div>
      </div>
    </div>
  </div>

  <div class="form-section">
    <div class="form-section-header"><span class="section-icon">📝</span>Note</div>
    <div class="form-grid">
      <div class="form-field">
        <textarea class="form-textarea" name="note" placeholder="Note aggiuntive..." oninput="onFieldChange('note',this.value)">${d.note||''}</textarea>
      </div>
    </div>
  </div>
  `;
}

function buildTRGS() {
  const d = formData.trgs;
  return `
  <div class="form-section">
    <div class="form-section-header"><span class="section-icon">📋</span>Dati Generali</div>
    <div class="form-grid">
      <div class="form-row cols-2">
        <div class="form-field">
          <label class="form-label">Rilevatore</label>
          ${makeInput('rilevatore','text','Nome rilevatore',d.rilevatore||'')}
        </div>
        <div class="form-field">
          <label class="form-label">Data</label>
          ${makeInput('data','date','',d.data||today())}
        </div>
      </div>
      <div class="form-field">
        <label class="form-label">Specie</label>
        ${makeSelect('specie',DATA.specie,'Seleziona specie...',d.specie||'')}
      </div>
      <div class="form-row cols-2">
        <div class="form-field">
          <label class="form-label">ID Albero</label>
          ${makeInput('id_albero','text','ID / N°',d.id_albero||'')}
        </div>
        <div class="form-field">
          <label class="form-label">Coer. Fito-Clim</label>
          ${makeSelect('coer_fito',DATA.coerFito,'Coerenza...',d.coer_fito||'')}
        </div>
      </div>
      <div class="form-field">
        <label class="form-label">Ubicazione</label>
        ${makeInput('ubicazione','text','Via / Luogo',d.ubicazione||'')}
      </div>
    </div>
  </div>

  <div class="form-section">
    <div class="form-section-header"><span class="section-icon">🌿</span>Misure Dendrologiche</div>
    <div class="form-grid">
      <div class="form-row cols-3">
        <div class="form-field">
          <label class="form-label">H <span class="unit">(m)</span></label>
          ${makeInput('h_albero','number','Alt.',d.h_albero||'','step="0.5" min="0"')}
        </div>
        <div class="form-field">
          <label class="form-label">D tr <span class="unit">(cm)</span></label>
          ${makeInput('d_tronco','number','Ø tr.',d.d_tronco||'','step="1" min="0"')}
        </div>
        <div class="form-field">
          <label class="form-label">Circonf <span class="unit">(cm)</span></label>
          <div class="computed-field" id="circ-trgs">${d.d_tronco ? (parseFloat(d.d_tronco)*Math.PI).toFixed(1) : '—'}</div>
        </div>
      </div>
      <div class="form-row cols-3">
        <div class="form-field">
          <label class="form-label">D ch <span class="unit">(m)</span></label>
          ${makeInput('d_chioma','number','Ø ch.',d.d_chioma||'','step="0.5" min="0"')}
        </div>
        <div class="form-field">
          <label class="form-label">D br <span class="unit">(cm)</span></label>
          ${makeInput('d_branca','number','Ø br.',d.d_branca||'','step="1" min="0"')}
        </div>
        <div class="form-field">
          <label class="form-label">L br <span class="unit">(m)</span></label>
          ${makeInput('l_branca','number','L br.',d.l_branca||'','step="0.5" min="0"')}
        </div>
      </div>
      <div class="form-row cols-2">
        <div class="form-field">
          <label class="form-label">H br <span class="unit">(m)</span></label>
          ${makeInput('h_branca','number','H br.',d.h_branca||'','step="0.5" min="0"')}
        </div>
        <div class="form-field">
          <label class="form-label">H bersaglio <span class="unit">(m)</span></label>
          ${makeInput('h_bersaglio','number','H bers.',d.h_bersaglio||'','step="0.5" min="0"')}
        </div>
      </div>
    </div>
  </div>

  <div class="form-section">
    <div class="form-section-header"><span class="section-icon">🗺️</span>Localizzazione & Classificazione</div>
    <div class="form-grid">
      <div class="form-row cols-2">
        <div class="form-field">
          <label class="form-label">Dimora</label>
          ${makeSelect('dimora',DATA.dimora,'Dimora...',d.dimora||'')}
        </div>
        <div class="form-field">
          <label class="form-label">Stadio</label>
          ${makeSelect('stadio',[...DATA.stadio,...DATA.stadioPalme],'Stadio...',d.stadio||'')}
        </div>
      </div>
      <div class="form-row cols-2">
        <div class="form-field">
          <label class="form-label">Pos. Sociale</label>
          ${makeSelect('pos_sociale',DATA.posSociale,'Posizione...',d.pos_sociale||'')}
        </div>
        <div class="form-field">
          <label class="form-label">Localizzazione</label>
          ${makeSelect('localiz',DATA.localiz,'Localiz...',d.localiz||'')}
        </div>
      </div>
      <div class="form-field">
        <label class="form-label">Vincoli</label>
        ${makeSelect('vincoli',DATA.vincoli,'Vincoli...',d.vincoli||'')}
      </div>
    </div>
  </div>

  <div class="form-section">
    <div class="form-section-header"><span class="section-icon">⚠️</span>Conflitti (max 2)</div>
    <div class="form-grid">
      <div class="form-row cols-2">
        ${[1,2].map(i => `<div class="form-field">
          <label class="form-label">Conflitto ${i}</label>
          ${makeSelect('conflitto_'+i,DATA.conflitti,'Tipo...',d['conflitto_'+i]||'')}
        </div>`).join('')}
      </div>
    </div>
  </div>

  <div class="form-section">
    <div class="form-section-header"><span class="section-icon">🔬</span>Grado di Pericolo Percepito</div>
    <div class="form-grid">
      <div class="form-field">
        <label class="form-label">Rottura Branca/Rami</label>
        <div class="danger-selector">${buildDangerBtns('branca','trgs',d.branca||'')}</div>
        <div class="danger-hint" id="hint-branca-trgs">${getDangerHint(d.branca)}</div>
      </div>
      <div class="form-field">
        <label class="form-label">Rottura Tronco/Castello</label>
        <div class="danger-selector">${buildDangerBtns('tronco','trgs',d.tronco||'')}</div>
        <div class="danger-hint" id="hint-tronco-trgs">${getDangerHint(d.tronco)}</div>
      </div>
      <div class="form-field">
        <label class="form-label">Rottura Colletto</label>
        <div class="danger-selector">${buildDangerBtns('colletto','trgs',d.colletto||'')}</div>
        <div class="danger-hint" id="hint-colletto-trgs">${getDangerHint(d.colletto)}</div>
      </div>
      <div class="form-field">
        <label class="form-label">Rib./Sciv. Zolla Radicale</label>
        <div class="danger-selector">${buildDangerBtns('zolla','trgs',d.zolla||'')}</div>
        <div class="danger-hint" id="hint-zolla-trgs">${getDangerHint(d.zolla)}</div>
      </div>
    </div>
  </div>

  <div class="form-section">
    <div class="form-section-header"><span class="section-icon">🎯</span>Bersaglio e Impulso</div>
    <div class="form-grid">
      <div class="form-field">
        <label class="form-label">Tipo di Bersaglio</label>
        ${makeSelect('tipo_bersaglio',DATA.tipoBersaglio,'Tipo bersaglio...',d.tipo_bersaglio||'')}
      </div>
      <div class="form-field">
        <label class="form-label">Classe Bersaglio (1-7)</label>
        ${makeInput('classe_bersaglio','number','1-7',d.classe_bersaglio||'','min="1" max="7"')}
      </div>
      <div class="form-field">
        <label class="form-label">Impulso Albero <span class="unit">(kgm/s)</span></label>
        <div class="computed-field" id="impulso-trgs">${computeImpulso('trgs')}</div>
      </div>
    </div>
  </div>

  <div class="form-section">
    <div class="form-section-header"><span class="section-icon">🧪</span>Condizioni di Salute</div>
    <div class="form-grid">
      <div class="form-field">
        <label class="form-label">Condizioni Salute e Vigoria</label>
        ${makeSelect('condiz_salute',DATA.condizSalute,'Condizioni...',d.condiz_salute||'')}
      </div>
      <div class="form-row cols-2">
        <div class="form-field">
          <label class="form-label">Monitoraggio</label>
          ${makeSelect('monitoraggio',DATA.monitoraggio,'Freq...',d.monitoraggio||'')}
        </div>
        <div class="form-field">
          <label class="form-label">Urgenza</label>
          ${makeSelect('urgenza',DATA.urgenza,'Urgenza...',d.urgenza||'')}
        </div>
      </div>
    </div>
  </div>

  <div class="form-section">
    <div class="form-section-header"><span class="section-icon">🧬</span>Valore Ecologico</div>
    <div class="form-grid">
      <div class="form-row cols-2">
        <div class="form-field">
          <label class="form-label">Biomassa <span class="unit">(kg)</span></label>
          <div class="computed-field">${computeBio('trgs')}</div>
        </div>
        <div class="form-field">
          <label class="form-label">CO₂ <span class="unit">(kg/anno)</span></label>
          <div class="computed-field">${computeCO2('trgs')}</div>
        </div>
      </div>
    </div>
  </div>

  <div class="form-section">
    <div class="form-section-header"><span class="section-icon">📊</span>Calcolo Rischio</div>
    <div class="form-grid">
      <div class="form-field">
        <label class="form-label">Risultato Triage</label>
        <div class="computed-field highlight" id="result-trgs">${computeRiskDisplay('trgs')}</div>
      </div>
    </div>
  </div>

  <div class="form-section">
    <div class="form-section-header"><span class="section-icon">📝</span>Note</div>
    <div class="form-grid">
      <div class="form-field">
        <textarea class="form-textarea" name="note" placeholder="Note aggiuntive..." oninput="onFieldChange('note',this.value)">${d.note||''}</textarea>
      </div>
    </div>
  </div>
  `;
}

function buildORD() {
  const d = formData.ord;
  return `
  <div class="form-section">
    <div class="form-section-header"><span class="section-icon">📋</span>Dati Generali</div>
    <div class="form-grid">
      <div class="form-row cols-2">
        <div class="form-field">
          <label class="form-label">Rilevatore</label>
          ${makeInput('rilevatore','text','Nome rilevatore',d.rilevatore||'')}
        </div>
        <div class="form-field">
          <label class="form-label">Data</label>
          ${makeInput('data','date','',d.data||today())}
        </div>
      </div>
      <div class="form-field">
        <label class="form-label">Specie</label>
        ${makeSelect('specie',DATA.specie,'Seleziona specie...',d.specie||'')}
      </div>
      <div class="form-row cols-2">
        <div class="form-field">
          <label class="form-label">ID Albero</label>
          ${makeInput('id_albero','text','ID / N°',d.id_albero||'')}
        </div>
        <div class="form-field">
          <label class="form-label">Coer. Fito-Clim</label>
          ${makeSelect('coer_fito',DATA.coerFito,'Coerenza...',d.coer_fito||'')}
        </div>
      </div>
      <div class="form-field">
        <label class="form-label">Ubicazione</label>
        ${makeInput('ubicazione','text','Via / Luogo',d.ubicazione||'')}
      </div>
    </div>
  </div>

  <div class="form-section">
    <div class="form-section-header"><span class="section-icon">🌿</span>Misure Dendrologiche</div>
    <div class="form-grid">
      <div class="form-row cols-3">
        <div class="form-field">
          <label class="form-label">H <span class="unit">(m)</span></label>
          ${makeInput('h_albero','number','Alt.',d.h_albero||'','step="0.5" min="0"')}
        </div>
        <div class="form-field">
          <label class="form-label">D tr <span class="unit">(cm)</span></label>
          ${makeInput('d_tronco','number','Ø tr.',d.d_tronco||'','step="1" min="0"')}
        </div>
        <div class="form-field">
          <label class="form-label">D ch <span class="unit">(m)</span></label>
          ${makeInput('d_chioma','number','Ø ch.',d.d_chioma||'','step="0.5" min="0"')}
        </div>
      </div>
      <div class="form-row cols-3">
        <div class="form-field">
          <label class="form-label">D br <span class="unit">(cm)</span></label>
          ${makeInput('d_branca','number','Ø br.',d.d_branca||'','step="1" min="0"')}
        </div>
        <div class="form-field">
          <label class="form-label">L br <span class="unit">(m)</span></label>
          ${makeInput('l_branca','number','L br.',d.l_branca||'','step="0.5" min="0"')}
        </div>
        <div class="form-field">
          <label class="form-label">H br <span class="unit">(m)</span></label>
          ${makeInput('h_branca','number','H br.',d.h_branca||'','step="0.5" min="0"')}
        </div>
      </div>
      <div class="form-field">
        <label class="form-label">H bersaglio <span class="unit">(m)</span></label>
        ${makeInput('h_bersaglio','number','H bers.',d.h_bersaglio||'','step="0.5" min="0"')}
      </div>
    </div>
  </div>

  <div class="form-section">
    <div class="form-section-header"><span class="section-icon">🗺️</span>Classificazione</div>
    <div class="form-grid">
      <div class="form-row cols-2">
        <div class="form-field">
          <label class="form-label">Dimora</label>
          ${makeSelect('dimora',DATA.dimora,'Dimora...',d.dimora||'')}
        </div>
        <div class="form-field">
          <label class="form-label">Stadio</label>
          ${makeSelect('stadio',DATA.stadio,'Stadio...',d.stadio||'')}
        </div>
      </div>
      <div class="form-row cols-2">
        <div class="form-field">
          <label class="form-label">Pos. Sociale</label>
          ${makeSelect('pos_sociale',DATA.posSociale,'Posizione...',d.pos_sociale||'')}
        </div>
        <div class="form-field">
          <label class="form-label">Localizzazione</label>
          ${makeSelect('localiz',DATA.localiz,'Localiz...',d.localiz||'')}
        </div>
      </div>
      <div class="form-field">
        <label class="form-label">Vincoli</label>
        ${makeSelect('vincoli',DATA.vincoli,'Vincoli...',d.vincoli||'')}
      </div>
    </div>
  </div>

  <div class="form-section">
    <div class="form-section-header"><span class="section-icon">⚠️</span>Conflitti (max 2)</div>
    <div class="form-grid">
      <div class="form-row cols-2">
        ${[1,2].map(i => `<div class="form-field">
          <label class="form-label">Conflitto ${i}</label>
          ${makeSelect('conflitto_'+i,DATA.conflitti,'Tipo...',d['conflitto_'+i]||'')}
        </div>`).join('')}
      </div>
    </div>
  </div>

  <div class="form-section">
    <div class="form-section-header"><span class="section-icon">🔍</span>Diagnosi</div>
    <div class="form-grid">
      <div class="form-row cols-2">
        <div class="form-field">
          <label class="form-label">Fitopatia</label>
          ${makeInput('fitopatia','text','Tipo fitopatia',d.fitopatia||'')}
        </div>
        <div class="form-field">
          <label class="form-label">Agente Cariogeno</label>
          ${makeSelect('agente_cariogeno',DATA.agentiCarie,'Agente...',d.agente_cariogeno||'')}
        </div>
      </div>
    </div>
  </div>

  <div class="form-section">
    <div class="form-section-header"><span class="section-icon">🌱</span>Caratteri Stazione e Zolla</div>
    <div class="form-grid">
      <div class="form-field">
        <label class="form-label">Caratteri Stazione / Zolla</label>
        <div class="checkbox-group" id="chips-zolla-ord">${buildChips('zolla_checks',DATA.caratteriZolla,d.zolla_checks||[])}</div>
      </div>
    </div>
  </div>

  <div class="form-section">
    <div class="form-section-header"><span class="section-icon">🪵</span>Caratteri Morfologici</div>
    <div class="form-grid">
      <div class="form-field">
        <label class="form-label">Colletto</label>
        <div class="checkbox-group">${buildChips('colletto_checks',DATA.caratteriColletto,d.colletto_checks||[])}</div>
      </div>
      <div class="form-field">
        <label class="form-label">Fusto</label>
        <div class="checkbox-group">${buildChips('fusto_checks',DATA.caratteriFusto,d.fusto_checks||[])}</div>
      </div>
      <div class="form-field">
        <label class="form-label">Castello</label>
        <div class="checkbox-group">${buildChips('castello_checks',DATA.caratteriCastello,d.castello_checks||[])}</div>
      </div>
      <div class="form-field">
        <label class="form-label">Ramificazione</label>
        <div class="checkbox-group">${buildChips('ramif_checks',DATA.caratteriRamif,d.ramif_checks||[])}</div>
      </div>
      <div class="form-field">
        <label class="form-label">Chioma</label>
        <div class="checkbox-group">${buildChips('chioma_checks',DATA.caratteriChioma,d.chioma_checks||[])}</div>
      </div>
    </div>
  </div>

  <div class="form-section">
    <div class="form-section-header"><span class="section-icon">📊</span>Condizioni Salute e Grado Pericolo</div>
    <div class="form-grid">
      <div class="form-field">
        <label class="form-label">Condizioni Salute e Vigoria</label>
        ${makeSelect('condiz_salute',DATA.condizSalute,'Condizioni...',d.condiz_salute||'')}
      </div>
      <div class="form-field">
        <label class="form-label">Grado Pericolo – Branca/Rami</label>
        <div class="danger-selector">${buildDangerBtns('branca','ord',d.branca||'')}</div>
        <div class="danger-hint" id="hint-branca-ord">${getDangerHint(d.branca)}</div>
      </div>
      <div class="form-field">
        <label class="form-label">Grado Pericolo – Tronco/Castello</label>
        <div class="danger-selector">${buildDangerBtns('tronco','ord',d.tronco||'')}</div>
        <div class="danger-hint" id="hint-tronco-ord">${getDangerHint(d.tronco)}</div>
      </div>
      <div class="form-field">
        <label class="form-label">Grado Pericolo – Colletto</label>
        <div class="danger-selector">${buildDangerBtns('colletto','ord',d.colletto||'')}</div>
        <div class="danger-hint" id="hint-colletto-ord">${getDangerHint(d.colletto)}</div>
      </div>
      <div class="form-field">
        <label class="form-label">Grado Pericolo – Zolla Radicale</label>
        <div class="danger-selector">${buildDangerBtns('zolla','ord',d.zolla||'')}</div>
        <div class="danger-hint" id="hint-zolla-ord">${getDangerHint(d.zolla)}</div>
      </div>
    </div>
  </div>

  <div class="form-section">
    <div class="form-section-header"><span class="section-icon">🎯</span>Bersaglio</div>
    <div class="form-grid">
      <div class="form-field">
        <label class="form-label">Tipo di Bersaglio</label>
        ${makeSelect('tipo_bersaglio',DATA.tipoBersaglio,'Tipo bersaglio...',d.tipo_bersaglio||'')}
      </div>
      <div class="form-field">
        <label class="form-label">Classe Bersaglio (1-7)</label>
        ${makeInput('classe_bersaglio','number','1-7',d.classe_bersaglio||'','min="1" max="7"')}
      </div>
      <div class="form-row cols-2">
        <div class="form-field">
          <label class="form-label">Impulso Albero <span class="unit">(kgm/s)</span></label>
          <div class="computed-field" id="impulso-ord">${computeImpulso('ord')}</div>
        </div>
        <div class="form-field">
          <label class="form-label">Impulso Ramo <span class="unit">(kgm/s)</span></label>
          <div class="computed-field" id="impulso-ramo-ord">${computeImpulsoRamo('ord')}</div>
        </div>
      </div>
    </div>
  </div>

  <div class="form-section">
    <div class="form-section-header"><span class="section-icon">✂️</span>Prescrizioni</div>
    <div class="form-grid">
      <div class="form-row cols-2">
        <div class="form-field">
          <label class="form-label">Monitoraggio</label>
          ${makeSelect('monitoraggio',DATA.monitoraggio,'Freq...',d.monitoraggio||'')}
        </div>
        <div class="form-field">
          <label class="form-label">Urgenza</label>
          ${makeSelect('urgenza',DATA.urgenza,'Urgenza...',d.urgenza||'')}
        </div>
      </div>
      <div class="form-field">
        <label class="form-label">Interventi Colturali</label>
        <textarea class="form-textarea" name="interventi" placeholder="Descrizione interventi prescritti..." oninput="onFieldChange('interventi',this.value)">${d.interventi||''}</textarea>
      </div>
    </div>
  </div>

  <div class="form-section">
    <div class="form-section-header"><span class="section-icon">📊</span>Calcolo Rischio</div>
    <div class="form-grid">
      <div class="form-field">
        <label class="form-label">Rischio Attuale</label>
        <div class="computed-field highlight" id="result-ord">${computeRiskDisplay('ord')}</div>
      </div>
    </div>
  </div>

  <div class="form-section">
    <div class="form-section-header"><span class="section-icon">🧬</span>Valore Ecologico</div>
    <div class="form-grid">
      <div class="form-row cols-3">
        <div class="form-field">
          <label class="form-label">Bio <span class="unit">(kg)</span></label>
          <div class="computed-field">${computeBio('ord')}</div>
        </div>
        <div class="form-field">
          <label class="form-label">CO₂ <span class="unit">(kg/a)</span></label>
          <div class="computed-field">${computeCO2('ord')}</div>
        </div>
        <div class="form-field">
          <label class="form-label">O₂ <span class="unit">(kg/a)</span></label>
          <div class="computed-field">${computeO2('ord')}</div>
        </div>
      </div>
    </div>
  </div>

  <div class="form-section">
    <div class="form-section-header"><span class="section-icon">📝</span>Note</div>
    <div class="form-grid">
      <div class="form-field">
        <textarea class="form-textarea" name="note" placeholder="Note aggiuntive..." oninput="onFieldChange('note',this.value)">${d.note||''}</textarea>
      </div>
    </div>
  </div>
  `;
}

// ===== DANGER BTNS =====
const DANGER_HINTS = {
  '1': 'Gravissimi – Probabilità cedimento 1/1–1/5/anno',
  '2': 'Gravi – Probabilità cedimento 1/5–1/50/anno',
  '3': 'Significativi – Probabilità cedimento 1/50–1/500/anno',
  '4': 'Incerti – Probabilità cedimento 1/500–1/5K/anno',
  '5': 'Moderati – Probabilità cedimento 1/5K–1/50K/anno',
  '6': 'Bassi – Probabilità cedimento 1/50K–1/500k/anno',
  '7': 'Trascurabili – Probabilità cedimento 1/500K–1/1M/anno',
};
function getDangerHint(v) {
  return v && DANGER_HINTS[String(v)] ? DANGER_HINTS[String(v)] : '';
}

function buildDangerBtns(field, formType, current) {
  return [1,2,3,4,5,6,7].map(v =>
    `<button type="button" class="danger-btn ${String(current)===String(v)?'active':''}" data-val="${v}" data-field="${field}" data-form="${formType}" onclick="selectDanger(this,${v},'${field}','${formType}')">${v}</button>`
  ).join('');
}

function selectDanger(btn, val, field, formType) {
  const container = btn.closest('.danger-selector');
  container.querySelectorAll('.danger-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  formData[formType][field] = val;
  const hintEl = document.getElementById('hint-'+field+'-'+formType);
  if (hintEl) hintEl.textContent = DANGER_HINTS[val] || '';
  updateComputedFields(formType);
}

// ===== CHIPS =====
function buildChips(name, items, selected) {
  return items.map(item => {
    const isSelected = selected.includes(item);
    return `<label class="check-chip ${isSelected?'selected':''}" onclick="toggleChip(this,'${name}','${item.replace(/'/g,"\\'")}')">
      <input type="checkbox" ${isSelected?'checked':''}>${item}
    </label>`;
  }).join('');
}

function toggleChip(el, name, item) {
  el.classList.toggle('selected');
  const tab = currentTab;
  if (!formData[tab][name]) formData[tab][name] = [];
  const arr = formData[tab][name];
  const idx = arr.indexOf(item);
  if (idx >= 0) arr.splice(idx,1);
  else arr.push(item);
}

// ===== CALCULATIONS =====
function computeImpulso(formType) {
  const d = formData[formType];
  const h = parseFloat(d.h_albero), dtr = parseFloat(d.d_tronco), hb = parseFloat(d.h_bersaglio);
  if (!h || !dtr || !hb) return '—';
  const circ = (dtr/100); // diameter in m
  const r = circ / (2*Math.PI); // radius
  const bio = Math.PI/4 * Math.pow(circ/Math.PI, 2) * h * 0.75 * 900;
  const impulso = bio * Math.sqrt(3 * 9.8 * (h - hb));
  if (isNaN(impulso) || impulso < 0) return '—';
  return impulso.toFixed(0);
}

function computeImpulsoRamo(formType) {
  const d = formData[formType];
  const dbr = parseFloat(d.d_branca), lbr = parseFloat(d.l_branca), hbr = parseFloat(d.h_branca), hb = parseFloat(d.h_bersaglio);
  if (!dbr || !lbr || !hbr || !hb) return '—';
  const bio = Math.PI/4 * Math.pow(dbr/100, 2) * lbr * 0.75 * 900;
  const impulso = bio * Math.sqrt(2 * 9.8 * (hbr - hb));
  if (isNaN(impulso) || impulso < 0) return '—';
  return impulso.toFixed(0);
}

function computeBio(formType) {
  const d = formData[formType];
  const h = parseFloat(d.h_albero), dtr = parseFloat(d.d_tronco);
  if (!h || !dtr) return '—';
  const bio = (Math.PI/4) * Math.pow(dtr/100, 2) * h * 0.9 * 900;
  return bio.toFixed(0) + ' kg';
}

function computeCO2(formType) {
  const d = formData[formType];
  const h = parseFloat(d.h_albero), dtr = parseFloat(d.d_tronco);
  if (!h || !dtr) return '—';
  const bio = (Math.PI/4) * Math.pow(dtr/100, 2) * h * 0.9 * 900;
  const co2 = bio * 0.55 * 0.9;
  return co2.toFixed(0) + ' kg/a';
}

function computeO2(formType) {
  const d = formData[formType];
  const h = parseFloat(d.h_albero), dtr = parseFloat(d.d_tronco);
  if (!h || !dtr) return '—';
  const bio = (Math.PI/4) * Math.pow(dtr/100, 2) * h * 0.9 * 900;
  const co2 = bio * 0.55 * 0.9;
  const o2 = (co2 / 44.01) * 31.999 * 0.9;
  return o2.toFixed(0) + ' kg/a';
}

function getMinPericolo(formType) {
  const d = formData[formType];
  const vals = [d.branca, d.tronco, d.colletto, d.zolla].map(v => parseInt(v)).filter(v => !isNaN(v) && v > 0);
  if (!vals.length) return null;
  return Math.min(...vals);
}

function computeRiskDisplay(formType) {
  const d = formData[formType];
  const p = getMinPericolo(formType);
  const b = parseInt(d.classe_bersaglio);
  if (!p || !b) return '<span style="color:#999">Compila Pericolo e Bersaglio</span>';
  const key = p + '-' + b;
  const riskClass = RISK_TABLE[key] || Math.ceil((p + b) / 2);
  const info = RISK_LABELS[riskClass] || RISK_LABELS[4];
  return `<div class="risk-badge ${info.class}">
    <span>⚠</span>
    <div><strong>Classe ${riskClass}</strong> – ${info.label}<br><small>${info.sub}</small></div>
  </div>`;
}

function updateComputedFields(formType) {
  const resultEl = document.getElementById('result-' + formType);
  if (resultEl) resultEl.innerHTML = computeRiskDisplay(formType);
  if (formType === 'trgs') {
    const impulsoEl = document.getElementById('impulso-trgs');
    if (impulsoEl) impulsoEl.textContent = computeImpulso('trgs');
    const circEl = document.getElementById('circ-trgs');
    if (circEl) {
      const dtr = parseFloat(formData.trgs.d_tronco);
      circEl.textContent = dtr ? (dtr * Math.PI).toFixed(1) : '—';
    }
  }
  if (formType === 'ord') {
    const impulsoEl = document.getElementById('impulso-ord');
    if (impulsoEl) impulsoEl.textContent = computeImpulso('ord');
    const impulsoREl = document.getElementById('impulso-ramo-ord');
    if (impulsoREl) impulsoREl.textContent = computeImpulsoRamo('ord');
  }
}

// ===== FIELD CHANGE =====
function onFieldChange(name, value) {
  const tab = currentTab;
  if (formData[tab] !== undefined) {
    formData[tab][name] = value;
    updateComputedFields(tab);
  }
}

// ===== NAVIGATION =====
function switchTab(tab) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  sel('screen-' + tab).classList.add('active');
  sel('tab-' + tab).classList.add('active');
  currentTab = tab;
  if (tab === 'archive') renderArchive();
  if (tab === 'home') renderHomeSaved();
  // Scroll to top on tab switch
  sel('main-content') && (sel('main-content').scrollTop = 0);
  document.querySelector('.main-content').scrollTop = 0;
}

function newForm(type) {
  editingId = null;
  formData[type] = { data: today() };
  renderForm(type);
  switchTab(type);
}

function renderForm(type) {
  const container = sel('form-' + type);
  if (!container) return;
  if (type === 'trgp') container.innerHTML = buildTRGP();
  else if (type === 'trgs') container.innerHTML = buildTRGS();
  else if (type === 'ord') container.innerHTML = buildORD();
}

function goHome() {
  switchTab('home');
}

// ===== SAVE =====
function saveForm(type) {
  const d = formData[type];
  if (!d.specie && !d.id_albero && !d.ubicazione) {
    showToast('⚠️ Inserisci almeno specie, ID o ubicazione', 'error');
    return;
  }
  const record = {
    id: editingId || uid(),
    type: type,
    savedAt: new Date().toISOString(),
    data: { ...d }
  };
  const idx = savedForms.findIndex(f => f.id === record.id);
  if (idx >= 0) savedForms[idx] = record;
  else savedForms.push(record);
  localStorage.setItem('arete_forms', JSON.stringify(savedForms));
  editingId = record.id;
  showToast('✅ Scheda salvata!', 'success');
  renderHomeSaved();
}

// ===== HOME SAVED LIST =====
function renderHomeSaved() {
  const el = sel('home-saved-list');
  if (!savedForms.length) {
    el.innerHTML = `<div class="empty-saved"><div class="emoji">📂</div><div>Nessuna scheda salvata.<br>Crea la tua prima valutazione!</div></div>`;
    return;
  }
  const recent = [...savedForms].sort((a,b) => b.savedAt.localeCompare(a.savedAt)).slice(0,5);
  el.innerHTML = recent.map(f => {
    const label = f.type.toUpperCase();
    const sp = f.data.specie ? f.data.specie.split(' - ')[1] || f.data.specie : '';
    const id = f.data.id_albero || f.data.ubicazione || '—';
    const dt = f.data.data || f.savedAt.split('T')[0];
    return `<div class="saved-item" onclick="openSaved('${f.id}')">
      <span class="saved-badge badge-${f.type}">${label}</span>
      <div class="saved-info">
        <div class="title">${sp || id}</div>
        <div class="meta">${id} · ${dt}</div>
      </div>
      <button class="saved-delete" onclick="deleteSaved(event,'${f.id}')">🗑</button>
    </div>`;
  }).join('');
}

// ===== ARCHIVE =====
function filterArchive(type, el) {
  archiveFilter = type;
  document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  renderArchive();
}

function renderArchive() {
  const el = sel('archive-list');
  let forms = [...savedForms].sort((a,b) => b.savedAt.localeCompare(a.savedAt));
  if (archiveFilter !== 'all') forms = forms.filter(f => f.type === archiveFilter);
  if (!forms.length) {
    el.innerHTML = `<div class="archive-empty"><div class="icon">📂</div>Nessuna scheda trovata.</div>`;
    return;
  }
  el.innerHTML = forms.map(f => {
    const sp = f.data.specie || '—';
    const id = f.data.id_albero || '—';
    const dt = f.data.data || f.savedAt.split('T')[0];
    const ubicaz = f.data.ubicazione || '—';
    return `<div class="archive-card">
      <div class="archive-card-header">
        <span class="saved-badge badge-${f.type}">${f.type.toUpperCase()}</span>
        <span style="font-size:14px;font-weight:600">${sp.split(' - ')[0]}</span>
      </div>
      <div class="archive-card-body">
        ID: ${id} · Luogo: ${ubicaz} · Data: ${dt}
        ${f.data.condiz_salute ? '<br>Salute: ' + f.data.condiz_salute.substring(0,60)+'...' : ''}
      </div>
      <div class="archive-card-footer">
        <button class="btn-sm primary" onclick="openSaved('${f.id}')">✏️ Modifica</button>
        <button class="btn-sm" onclick="viewDetail('${f.id}')">👁 Dettagli</button>
        <button class="btn-sm danger" onclick="deleteSaved(null,'${f.id}')">🗑 Elimina</button>
      </div>
    </div>`;
  }).join('');
}

function openSaved(id) {
  const f = savedForms.find(x => x.id === id);
  if (!f) return;
  editingId = id;
  formData[f.type] = { ...f.data };
  renderForm(f.type);
  switchTab(f.type);
}

function deleteSaved(evt, id) {
  if (evt) { evt.stopPropagation(); evt.preventDefault(); }
  if (!confirm('Eliminare questa scheda?')) return;
  savedForms = savedForms.filter(f => f.id !== id);
  localStorage.setItem('arete_forms', JSON.stringify(savedForms));
  renderArchive();
  renderHomeSaved();
  showToast('🗑 Scheda eliminata');
}

function viewDetail(id) {
  const f = savedForms.find(x => x.id === id);
  if (!f) return;
  const d = f.data;
  const rows = Object.entries(d).map(([k,v]) => {
    if (!v || (Array.isArray(v) && !v.length)) return '';
    const val = Array.isArray(v) ? v.join(', ') : v;
    const key = k.replace(/_/g,' ').replace(/\b\w/g, c => c.toUpperCase());
    return `<div class="detail-row"><span class="detail-key">${key}</span><span class="detail-val">${val}</span></div>`;
  }).filter(Boolean).join('');
  const w = window.open('', '_blank');
  w.document.write(`<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>ARETE – Dettaglio</title>
  <style>body{font-family:sans-serif;max-width:600px;margin:0 auto;padding:20px;background:#f5f0e8}h1{color:#1a2e1a;font-size:20px}h2{color:#3d6b3d;font-size:14px;margin-top:16px}.row{display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #ddd;font-size:13px}.key{color:#666;text-transform:uppercase;font-size:11px}.val{font-weight:500;text-align:right}</style></head>
  <body><h1>🌲 ARETE – Scheda ${f.type.toUpperCase()}</h1><p style="font-size:12px;color:#666">Salvata: ${new Date(f.savedAt).toLocaleString('it-IT')}</p>
  <button onclick="window.print()" style="margin:10px 0;padding:8px 16px;background:#1a2e1a;color:white;border:none;border-radius:6px;cursor:pointer">🖨 Stampa</button>
  ${rows.split('</div>').join('</div>').replace(/<div class="detail-row">/g,'<div class="row">').replace(/class="detail-key"/g,'class="key"').replace(/class="detail-val"/g,'class="val"')}
  </body></html>`);
  w.document.close();
}

// ===== EXPORT =====
function showExportModal() {
  sel('export-modal').classList.remove('hidden');
}
function closeModal(evt) {
  if (evt.target === sel('export-modal')) sel('export-modal').classList.add('hidden');
}

function exportJSON() {
  const blob = new Blob([JSON.stringify(savedForms, null, 2)], {type:'application/json'});
  downloadBlob(blob, 'arete_export_' + today() + '.json');
  sel('export-modal').classList.add('hidden');
  showToast('📄 JSON esportato', 'success');
}

function exportCSV() {
  if (!savedForms.length) { showToast('Nessuna scheda da esportare', 'error'); return; }
  const allKeys = new Set();
  savedForms.forEach(f => Object.keys(f.data).forEach(k => allKeys.add(k)));
  const keys = ['type','savedAt',...allKeys];
  const header = keys.join(';');
  const rows = savedForms.map(f => keys.map(k => {
    let v = k === 'type' ? f.type : k === 'savedAt' ? f.savedAt : (f.data[k]||'');
    if (Array.isArray(v)) v = v.join('|');
    return '"' + String(v).replace(/"/g,'""') + '"';
  }).join(';'));
  const csv = [header,...rows].join('\n');
  const blob = new Blob(['\uFEFF'+csv], {type:'text/csv;charset=utf-8'});
  downloadBlob(blob, 'arete_export_' + today() + '.csv');
  sel('export-modal').classList.add('hidden');
  showToast('📊 CSV esportato', 'success');
}

function copyClipboard() {
  const text = savedForms.map(f => {
    const d = f.data;
    return `[${f.type.toUpperCase()}] ${d.specie||''} - ID: ${d.id_albero||'N/A'} - ${d.data||''}\nLuogo: ${d.ubicazione||'N/A'}\nSalute: ${d.condiz_salute||'N/A'}\n`;
  }).join('\n---\n');
  navigator.clipboard.writeText(text).then(() => {
    sel('export-modal').classList.add('hidden');
    showToast('📋 Copiato negli appunti!', 'success');
  }).catch(() => showToast('Errore copia appunti','error'));
}

function downloadBlob(blob, name) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = name; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

// ===== INIT =====
renderHomeSaved();
