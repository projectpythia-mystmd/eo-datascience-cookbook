Search.setIndex({"alltitles": {"(Replace_with_your_title) Cookbook": [[0, null]], "Authors": [[0, "authors"]], "Classification": [[1, "classification"]], "Classifiying with Naive Bayes": [[1, "classifiying-with-naive-bayes"]], "Classifiying with Random Forest": [[1, "classifiying-with-random-forest"]], "Comparison of the Classificators": [[1, "comparison-of-the-classificators"]], "Conclusion": [[1, "conclusion"]], "Contributors": [[0, "contributors"]], "Data Acquisition": [[1, "data-acquisition"]], "Data Preparation": [[1, "data-preparation"]], "Data Visualization": [[1, "data-visualization"]], "Flood Classification": [[2, "flood-classification"]], "From Backscattering to Flood Mapping": [[2, "from-backscattering-to-flood-mapping"]], "How to Cite This Cookbook": [[3, null]], "Likelihoods": [[2, "likelihoods"]], "Loading the Data": [[1, "loading-the-data"]], "Microwave Backscattering over Land and Water": [[2, "microwave-backscattering-over-land-and-water"]], "Motivation": [[0, "motivation"]], "NDVI Image": [[1, "ndvi-image"]], "Posteriors": [[2, "posteriors"]], "RGB Image": [[1, "rgb-image"]], "References {.unnumbered}": [[4, null]], "Regions of Interest": [[1, "regions-of-interest"]], "Running on Binder": [[0, "running-on-binder"]], "Running on Your Own Machine": [[0, "running-on-your-own-machine"]], "Running the Notebooks": [[0, "running-the-notebooks"]], "Searching in the Catalog": [[1, "searching-in-the-catalog"]], "Section 1 ( Replace with the title of this section, e.g. \u201cFoundations\u201d )": [[0, "section-1-replace-with-the-title-of-this-section-e-g-foundations"]], "Section 2 ( Replace with the title of this section, e.g. \u201cExample workflows\u201d )": [[0, "section-2-replace-with-the-title-of-this-section-e-g-example-workflows"]], "Structure": [[0, "structure"]], "title: Classification\nsubtitle: Finding forests with satelite imagery\njupyter:\nkernelspec:\nname: \u201c01_classification\u201d\nlanguage: \u201cpython\u201d\ndisplay_name: \u201c01_classification\u201d\nformat:\nhtml:\ncode-fold: show\neval: true": [[1, null]], "title: Reverend Bayes updates our Belief in Flood Detection\nsubtitle: How an 275 year old idea helps map the extent of floods\njupyter:\nkernelspec:\nname: \u201c02_floodmapping\u201d\nlanguage: \u201cpython\u201d\ndisplay_name: \u201c02_floodmapping\u201d": [[2, null]]}, "docnames": ["README", "notebooks/01_classification", "notebooks/02_floodmapping", "notebooks/how-to-cite", "notebooks/references"], "envversion": {"sphinx": 62, "sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1}, "filenames": ["README.md", "notebooks/01_classification.ipynb", "notebooks/02_floodmapping.ipynb", "notebooks/how-to-cite.md", "notebooks/references.ipynb"], "indexentries": {}, "objects": {}, "objnames": {}, "objtypes": {}, "terms": {"": [1, 2], "0": [1, 2, 3], "00": 1, "000286": 1, "0006": 1, "01": [1, 2], "012451": 1, "02": [1, 2], "03": 1, "04": 1, "05": [1, 2], "051986": 1, "06": 1, "067192": 1, "07": 1, "07145": 1, "09": 1, "09034": 2, "0_map": 2, "1": [1, 2], "10": 1, "100": 1, "100645": 1, "101861": 1, "102": 1, "10625": 2, "11": 1, "115243": 1, "118892": 1, "11961": 2, "12": 1, "121": 2, "12105": 1, "1212": 1, "122": 2, "124366": 1, "125583": 1, "13": 1, "135923": 1, "137139": 1, "14": 1, "141": 1, "142015": 2, "144438": 1, "15": 1, "16": 1, "165118": 1, "169984": 1, "17": 1, "18": [1, 2], "185798": 1, "188839": 1, "19": 1, "1_": 2, "1_cb": 2, "1_cb_histogram_s": 2, "1f": 1, "2": [1, 2, 3], "20": 1, "2018": 2, "2024": 1, "203": 1, "21": 1, "213168": 1, "22": 1, "221": 2, "223": 2, "228374": 1, "23": 1, "23324": 1, "236281": 1, "24": 1, "25": 1, "255": 1, "2593019971002186": 1, "26": 1, "26426": 1, "267301": 1, "269126": 1, "27": 1, "276": 1, "28": 1, "284": 1, "29": 1, "29902": 2, "2_": 2, "2_map": 2, "3": [1, 2], "30": [1, 2], "304": 1, "31": 1, "3125": 2, "318": 1, "32": [1, 2], "33": 1, "3375": 2, "34": 1, "344": 1, "35": [1, 2], "357476": 1, "36": 1, "365": 2, "375": 1, "375723": 1, "38": 1, "382865": 1, "3857": 2, "39": 1, "394181": 2, "399444": 1, "3_cb": 2, "3_cb_histogram_s": 2, "4": [1, 2, 3], "40": 1, "401112": 1, "402329": 1, "404": 1, "407": 1, "41": 1, "412217": 1, "418907": 1, "42": 1, "425598": 1, "43": 1, "4326": 1, "4375": 2, "44": 1, "440804": 1, "44573": 2, "45": 1, "453577": 1, "457834": 1, "46": 1, "465133": 1, "47": 1, "470607": 1, "48": 1, "482772": 1, "49": 1, "5": [1, 2], "50": 2, "500411": 1, "505": 1, "51": 1, "510142": 1, "519266": 1, "52": 1, "5203": 1, "5211": 1, "53": 1, "530822": 1, "54": 1, "5406": 1, "5487": 1, "55": 1, "550894": 1, "556976": 1, "558801": 1, "56": 1, "57": 1, "5781": 2, "58": 1, "580697": 1, "581914": 1, "588604": 1, "59": [1, 2], "594079": 1, "6": [1, 2], "60": 1, "600": 1, "606": 1, "60m": 1, "61": 1, "62": 1, "620233": 1, "623882": 1, "63": 1, "6300": 1, "637263": 1, "64": [1, 2], "65": 1, "66": 1, "660376": 1, "6618": 1, "664634": 1, "67": 1, "674974": 1, "67984": 1, "68": 1, "682272": 1, "684097": 1, "69": 1, "690788": 1, "7": [1, 2], "706": 1, "71": 1, "72": 1, "723024": 1, "73": 1, "739446": 1, "74": 1, "75": 1, "75237": 2, "754041": 2, "756477": 1, "76": 1, "77": 1, "78": 1, "780806": 1, "79": 1, "798445": 1, "8": [1, 2], "80696": 1, "807": 1, "81": 1, "8125": 2, "82": 1, "83": 1, "84": 1, "85": [1, 2], "86": 1, "87": 1, "870124": 1, "874382": 1, "88": 1, "89": 1, "894454": 1, "9": 1, "90": 1, "901753": 1, "908": 1, "91": 1, "910268": 1, "92": 1, "929123": 1, "93": 1, "938855": 1, "94": 1, "95": 1, "96": 1, "97": 1, "971091": 1, "972916": 1, "978998": 1, "98": 1, "983256": 1, "As": 2, "BY": 3, "By": 1, "If": [0, 2], "In": [1, 2], "It": 1, "Of": 2, "The": [0, 1, 2, 3], "Then": 0, "These": [1, 2], "To": 1, "With": 1, "_reproject": 1, "abl": 0, "about": 1, "abov": 2, "access": 1, "accompani": 1, "accord": 2, "accur": 1, "accuraci": 1, "acknowledg": 0, "across": 1, "activ": 0, "actual": [1, 2], "ad": 1, "adapt": 3, "add": [0, 1, 2], "add_colorbar": 2, "add_lay": 2, "add_scalebar": 2, "add_subplot": 2, "add_temporary_artist": 2, "add_wm": 2, "addit": 1, "addition": 1, "after": [0, 1], "again": 2, "agre": 1, "agreement": 1, "algorithm": [1, 2], "all": [0, 1, 2, 3], "all_touch": 1, "allow": 1, "alpha": [1, 2], "alreadi": 1, "also": [1, 2], "although": 1, "alwai": 3, "ambigu": 1, "amount": 1, "an": 1, "analysi": 1, "analyz": 1, "ani": 1, "annot": 1, "anoth": 2, "apach": 3, "appear": 1, "appli": 1, "apply_layout": 2, "approach": 1, "appropri": 3, "approxim": 1, "ar": [0, 1, 2, 3], "arang": 2, "archiv": 3, "area": [1, 2], "around": 1, "arrai": 1, "artist": 2, "assess": 1, "assign": 2, "associ": [1, 2], "astyp": 1, "aswel": 1, "attach": 2, "auen": 1, "author": 3, "autoscal": 2, "avail": 1, "averag": 2, "avg": 1, "aw": 1, "ax": [1, 2], "ax_low": 2, "ax_upp": 2, "axi": [1, 2], "b": 1, "band": 1, "bar": 1, "base": [1, 2], "based_2022": 2, "bauer": 2, "bayesian": 2, "bayesian_flood_decis": 2, "becaus": 2, "been": 2, "befor": [1, 2], "begin": 1, "being": [1, 2], "below": [0, 2], "best": 2, "better": 1, "between": [1, 2], "bilinear": 1, "block": 2, "blue": 1, "bodi": 1, "book": [0, 3], "both": 1, "bound": 1, "broken": 0, "buffer": 2, "c0": 1, "c1": [1, 2], "c2": 2, "c3": 2, "calc_land_likelihood": 2, "calc_likelihood": 2, "calc_posterior": 2, "calc_water_likelihood": 2, "calcul": [1, 2], "call": 2, "can": [0, 1, 2], "cap": 2, "care": 1, "case": [1, 2], "categori": 1, "caus": 2, "cax": 1, "cb": 2, "cbar": 1, "cbar_kwarg": 1, "cc": 3, "cd": 0, "cell": 0, "center": 1, "certain": [1, 2], "chanc": 2, "chang": 0, "chapter": [0, 1], "characterist": 2, "chart": 1, "chef": 0, "chunk": 1, "cla": 2, "class": 1, "class_counts_df": 1, "classifi": [1, 2], "classification_report": 1, "clearer": 1, "clearli": 1, "click": [0, 2], "client": 1, "clip": 1, "clip_arrai": 1, "clipped_nan": 1, "clone": 0, "cloud": [0, 1], "cmap": 1, "cmap_green": 1, "cmap_trio": 1, "cmc": 1, "cmcrameri": 1, "co": 2, "code": [0, 2, 3], "coin": 2, "collect": 1, "color": 1, "colorbar": 1, "column": 1, "com": [0, 1], "combin": [1, 2], "common": 3, "commun": 3, "compar": [1, 2], "comparisson": 1, "complet": [0, 1], "composit": 1, "compris": 0, "comput": [0, 1, 2], "con_mat_nb": 1, "con_mat_rf": 1, "concaten": 1, "concatn": 1, "concern": 2, "conda": 0, "confus": 1, "confusion_matrix": 1, "consider": 2, "consumpt": 3, "content": [0, 3], "convers": 1, "coord": 1, "coordin": 1, "cork": 1, "corner": 0, "correctli": 1, "count": 1, "cours": 2, "cover": [0, 1], "cr": [1, 2], "creat": [0, 1, 2], "creativ": 3, "credit": 3, "cropland": 1, "custom": 1, "d": [1, 2], "d080": 2, "dai": 1, "danub": 1, "darkgreen": 1, "dask": 1, "data": [0, 2], "data_dict_feat": 1, "data_dict_nonfeat": 1, "dataarrai": 1, "datafram": 1, "datapoint": 2, "dataset": 1, "date_queri": 1, "datetim": [1, 2], "db": 2, "dead": 1, "decis": 2, "deduc": 2, "def": [1, 2], "default": 2, "defin": 1, "definitli": 1, "delta": 1, "depth": 1, "describ": 0, "detail": [0, 2], "diagnost": 1, "diagon": 1, "dictionari": 1, "differ": [1, 2], "dim": 1, "dimension": 1, "directli": 1, "directori": 0, "disagr": 1, "disagre": 1, "displai": 1, "distinct": 1, "distinguish": 1, "distribut": [1, 2], "do": 2, "doi": 3, "don": 2, "donau": 1, "donauauen": 1, "double_clf": 1, "drop": [1, 2], "ds_class": 1, "ds_odc": 1, "dt": 2, "dtime_str": 2, "dx": 1, "e054n006t3": 2, "each": [0, 1, 2], "earth": 1, "easi": 2, "east": 1, "ec": [1, 2], "effect": [1, 2, 3], "either": [0, 1], "element": 1, "element84": 1, "elimin": 1, "els": 2, "emploi": 1, "enabl": 0, "end": 0, "end_dat": 1, "ensembl": 1, "ensur": [1, 2], "enter": 0, "entir": 1, "enum": 1, "env": [0, 1], "environ": 0, "eomap": 2, "epsg": 1, "equal": [1, 2], "equat": 2, "equi7_eu": 2, "equi7_eu020m": 2, "erron": 1, "error": 1, "estim": 2, "etc": 0, "evalu": 1, "even": 0, "event": 2, "evid": [1, 2], "examin": 1, "exampl": 1, "exclud": 1, "execut": 0, "exercis": 2, "expected_land_backscatt": 2, "experienc": 2, "explain": 2, "explor": 1, "extent": 1, "extract": [1, 2], "f": [0, 1, 2], "f1": 1, "f_post": 2, "f_post_prob": 2, "fall": 1, "fals": [1, 2], "fc": [1, 2], "feat_data": 1, "feat_valu": 1, "featur": 1, "februari": 2, "few": 0, "fewer": 1, "fig": [1, 2], "figsiz": [1, 2], "figur": [0, 2], "file": 0, "fillna": 1, "final": 1, "find": 2, "first": [0, 1], "fit": 1, "flatten": 2, "flip": 2, "float": 1, "flood_classif": 2, "focu": 1, "follow": [0, 1, 2], "forest_area": 1, "forest_df": 1, "formula": 1, "forward": 2, "found": 1, "foundat": 2, "frac": 1, "frame": 1, "free": [1, 3], "from": [0, 1], "from_bbox": 1, "further": 1, "gain": [0, 1], "gaussiannb": 1, "gcp": 1, "gener": [1, 2], "geo": 1, "geobox": 1, "geodatafram": 1, "geom": 1, "geometri": 1, "geopanda": 1, "geoppanda": 1, "geotransform": 1, "get": [0, 1, 2], "get_ext": 2, "get_height": 1, "get_width": 1, "get_x": 1, "git": 0, "github": [0, 3], "give": [1, 3], "given": 2, "go": 2, "goldenrod": 1, "good": 1, "got": 1, "govern": 2, "gpd": 1, "greater": 2, "greek": 2, "green": 1, "guess": 2, "ha": 1, "hand": 2, "handl": 1, "have": [0, 1, 2], "healthi": 1, "help": 1, "here": [0, 1, 2], "higher": [1, 2], "highlight": 1, "hist_bin": 2, "hm_c1": 2, "hm_c2": 2, "hm_c3": 2, "hold": 2, "home": 1, "how": [0, 1], "howev": 2, "hpar": 2, "hparam_dc": 2, "http": [0, 1], "hypothesi": 2, "i": [0, 1, 2, 3], "icon": 0, "id": 2, "ident": 1, "identifi": 1, "idx": 1, "illustr": 1, "image_data": 1, "implement": 1, "import": [0, 1, 2], "impress": 1, "imshow": 1, "inanim": 1, "includ": [0, 1], "incorrect": 1, "incorrectli": 1, "index": 1, "indianr": 1, "indic": 1, "individu": 1, "inform": 2, "infrar": 1, "initi": [1, 2], "input": 1, "insight": 1, "int": 1, "integ": 1, "intend": 1, "interact": 0, "interest": 0, "interpol": 1, "intersect": 1, "invert": 1, "is_valid_pixel": 1, "isinst": 2, "isnan": 1, "item": 1, "item_collect": 1, "its": [1, 2], "jupyt": 0, "jupyterlab": 0, "just": 2, "k": 2, "know": [0, 2], "known": 2, "kwarg": 2, "l": 2, "l2a": 1, "lab": 0, "label": [1, 2], "land_likelihood": 2, "larger": 1, "latest": 3, "latitud": 1, "latmax": 1, "latmin": 1, "launch": 0, "layer": 2, "lazili": 1, "lbsc_mean": 2, "lbsc_std": 2, "learn": 1, "left": 2, "legend": 2, "leithagebirg": 1, "len": 1, "less": 1, "let": 2, "lib": 1, "librari": 1, "licens": 3, "lik": 2, "limit": [1, 2], "line": 2, "list": [1, 2], "listedcolormap": 1, "live": 0, "ll": 0, "loc": 2, "local": 0, "locat": 1, "logic": 2, "long": 3, "longitud": 1, "lonmax": 1, "lonmin": 1, "look": 2, "lower": 1, "lw": 2, "m": [1, 2], "m0": 2, "m2": 2, "machin": 1, "macro": 1, "mai": 1, "main": 0, "major": 2, "make": 1, "map": 1, "mark": 2, "marschallinger_satellit": 2, "mask": 1, "materi": [0, 3], "matplotlib": [1, 2], "matric": 1, "matrix": 1, "max": [1, 2], "maxi": 1, "maxx": 1, "mean": [1, 3], "mean_20200101t000000_20201231t235959__d080_e054n006t3_eu020m_v01r03_s1iwgrdh": 2, "measur": 2, "median": 1, "median_data_dict_feat": 1, "method": 1, "metric": 1, "mini": 1, "miniconda3": 1, "minim": 1, "minx": 1, "misclassifi": 1, "miss": 1, "mistakenli": 1, "model_select": 1, "moderatli": 1, "modul": 1, "moment": 0, "month": 1, "more": [0, 1, 2], "mous": 0, "move": [0, 2], "multi": 1, "multipl": 1, "multispectr": 1, "must": 1, "my": 1, "n": [1, 2], "n_estim": 1, "naive_bay": 1, "nan": 1, "nationalpark": 1, "navig": 0, "nb": 1, "nb_predict": 1, "nb_predict_img": 1, "nb_test": 1, "nc": 2, "necessari": 1, "need": [0, 1, 2], "neg": 1, "new": 2, "new_lay": 2, "new_map": 2, "next": 2, "nf": 2, "nf_post": 2, "nf_post_prob": 2, "nir": 1, "non": [1, 2, 3], "none": [1, 2], "nonfeat_data": 1, "nonfeat_valu": 1, "nonforest_area": 1, "nonforest_df": 1, "norm": 2, "normal": 1, "normalized_differ": 1, "not_vegit": 1, "notebook": 2, "notgeoreferencedwarn": 1, "notnul": 2, "now": [0, 1, 2], "np": [1, 2], "num": 1, "num_2_class": 1, "num_of_band": 1, "num_of_pixel": 1, "numpi": [1, 2], "object": 1, "observ": [1, 2], "obtain": 1, "occur": 2, "occurr": 2, "odc": 1, "offset": 1, "oleron_r": 1, "onc": [0, 1], "one": [0, 1, 2], "ones": 1, "onli": 1, "open": [1, 2, 3], "open_dataset": 2, "openstreetmap": 2, "orient": 2, "other": [1, 2], "our": 1, "outlier": 1, "outperform": 1, "output": [0, 1], "overview": 1, "p": [1, 2], "packag": 1, "panda": 1, "paramet": [1, 2], "particular": 2, "particularli": 1, "pass": 1, "past": 2, "patch": 1, "path": 1, "pathlib": 1, "pd": 1, "pdf": 2, "per": 1, "percentag": 1, "perform": 1, "period": 1, "perman": 2, "pi": 2, "pick": 2, "pictur": 1, "piec": 2, "pixel": [1, 2], "plant": 1, "plia": 2, "plia_dc": 2, "plot": [1, 2], "plot_map": 2, "plt": [1, 2], "point": [1, 2], "poli": 1, "polygon": 1, "posit": 1, "possess": 1, "post": 2, "power": 1, "precis": 1, "predict": 1, "present": [0, 1], "press": 0, "primari": 0, "print": 1, "prior": 2, "probabl": 2, "proce": 1, "procedur": 1, "process": 1, "program": 0, "progressbar": 1, "project": [0, 3], "projectpythia": 0, "proport": 1, "provid": 1, "py": 1, "pyplot": [1, 2], "pystac_cli": 1, "pythia": [0, 3], "python": 0, "python3": 1, "quantifi": 1, "quast_getting_2024": 2, "r": 2, "radar": 0, "random_st": 1, "randomforestclassifi": 1, "rang": [1, 2], "rasterio": 1, "rate": 1, "ravel": 1, "re": 2, "reach": 0, "readi": 2, "recal": 1, "red": 1, "region": 2, "releas": 3, "relim": 2, "remain": 1, "remaind": 1, "remov": 2, "replac": 1, "replic": 2, "report": 1, "repositori": 0, "repres": 1, "represent": 1, "resampl": 1, "reshap": [1, 2], "resolut": 1, "resolv": 3, "result": 1, "retriev": 1, "return": [1, 2], "reus": 3, "reveal": 1, "revers": 2, "rf": 1, "rf_predict": 1, "rf_predict_img": 1, "rf_test": 1, "rgb_comp": 1, "rgb_median": 1, "right": 0, "rio": 1, "rioxarrai": 1, "river": 1, "robust": 1, "rocket": 0, "rot": 1, "rouse1974monitor": 1, "row": 1, "rpc": 1, "runner": 1, "s1": 2, "s1_csar_iwgrdh": 2, "s1_paramet": 2, "s2": 2, "s3": 2, "sai": 2, "same": 1, "sat": 2, "satellit": 1, "scene": 1, "scikit": 1, "scipi": 2, "scl": 1, "score": 1, "seaborn": 1, "second": 0, "secondari": 1, "section": 1, "see": [0, 1, 2], "seen": 2, "select": [0, 1, 2], "sensit": 1, "sentenc": 0, "sentinel": 1, "serv": [1, 3], "set": 1, "set_aspect": 1, "set_axis_off": 1, "set_data": 2, "set_ext": 2, "set_ticklabel": 1, "set_titl": 1, "set_xlabel": 2, "set_ylabel": 2, "set_yticklabel": 1, "sever": 1, "shape": [1, 2], "share": 3, "shift": 0, "ship": 0, "should": 0, "show": 2, "show_lay": 2, "shown": 2, "sig0": 2, "sig0_20180228t043908__vv_d080_e054n006t3_eu020m_v1m1r1_s1aiwgrdh_tuwien": 2, "sig0_dc": 2, "sigma": 2, "signific": 1, "simplest": 0, "simpli": 0, "sin": 2, "sinc": 1, "singl": 1, "site": 1, "situat": 1, "size": [1, 2], "sketch": 2, "skill": 0, "sklearn": 1, "sn": 1, "snow": 1, "so": [2, 3], "some": 1, "sourc": [1, 3], "south": 1, "spatial": 1, "specif": 1, "specifi": 1, "split": 1, "stac": 1, "stackstac": 1, "start": [0, 1, 2], "start_dat": 1, "stat": 2, "state": 0, "statist": 2, "std": 2, "street": 2, "strength": 1, "strftime": 1, "strptime": 2, "studi": 2, "subject": [0, 2], "subplot": [1, 2], "subsequ": 1, "suit": 1, "sum": 1, "superimpos": 2, "supervis": 1, "support": 1, "sure": 0, "surfac": 2, "t": [1, 2], "tag": 2, "target": 2, "techniqu": 1, "tempor": 1, "temporari": 2, "test": 1, "test_siz": 1, "textcoord": 1, "than": 2, "thei": [1, 2], "them": [0, 1, 2], "therebi": 1, "therefor": 1, "thessali": 2, "thi": [1, 2], "through": 0, "thu": 2, "tick": 1, "tight_layout": 1, "time": [1, 2], "timedelta": 1, "timetupl": 2, "tm_ydai": 2, "to_arrai": 1, "to_dataarrai": 1, "to_numpi": 2, "top": [0, 2], "train": 1, "train_test_split": 1, "transpos": 1, "true": 2, "try": 2, "tu": 2, "tupl": 1, "tuw_s1_harpar": 2, "two": [0, 1, 2], "type": 1, "u": 1, "under": 3, "underscor": 1, "understand": 1, "unhealthi": 1, "until": 0, "up": 0, "update_plot": 2, "upper": 2, "urban": 1, "us": [0, 1, 2], "util": 1, "v01r03": 2, "v0m2r3": 2, "v1": 1, "v1m1r1": 2, "va": 1, "valid": 1, "valu": [1, 2], "valuabl": 1, "value_left": 2, "value_right": 2, "ve": 2, "vector": 1, "veget": 1, "veri": 1, "versu": 2, "vertic": 2, "via": 0, "vienna": 1, "view": 0, "view_bayes_flood": 2, "vline": 2, "w": 2, "wa": [1, 2], "wai": 0, "want": 2, "warp": 1, "water": 1, "water_likelihood": 2, "wbsc_mean": 2, "wbsc_std": 2, "we": [1, 2], "weak": 1, "weight": [1, 2], "well": [1, 2], "what": [0, 2], "when": [1, 2], "where": [1, 2], "whether": 2, "which": [0, 1, 2], "while": [1, 3], "whitesmok": 1, "whole": 2, "why": 0, "widget": 2, "wien": 2, "wish": 1, "within": 1, "without": 2, "word": 2, "work": [0, 1, 2], "wt": 2, "x": [1, 2], "x_feat_data": 1, "x_image_data": 1, "x_nonfeat_data": 1, "x_test": 1, "x_train": 1, "xarrai": [1, 2], "xr": [1, 2], "xytext": 1, "y": [1, 2], "y1_pdf": 2, "y2_pdf": 2, "y_feat_data": 1, "y_nonfeat_data": 1, "y_test": 1, "y_train": 1, "year": 1, "yet": 2, "ylim": 1, "ymax": 2, "ymin": 2, "yml": 0, "you": [0, 2, 3], "zenodo": 3, "zero": 1}, "titles": ["(Replace_with_your_title) Cookbook", "title: Classification\nsubtitle: Finding forests with satelite imagery\njupyter:\nkernelspec:\nname: \u201c01_classification\u201d\nlanguage: \u201cpython\u201d\ndisplay_name: \u201c01_classification\u201d\nformat:\nhtml:\ncode-fold: show\neval: true", "title: Reverend Bayes updates our Belief in Flood Detection\nsubtitle: How an 275 year old idea helps map the extent of floods\njupyter:\nkernelspec:\nname: \u201c02_floodmapping\u201d\nlanguage: \u201cpython\u201d\ndisplay_name: \u201c02_floodmapping\u201d", "How to Cite This Cookbook", "References {.unnumbered}"], "titleterms": {"01_classif": 1, "02_floodmap": 2, "1": 0, "2": 0, "275": 2, "acquisit": 1, "an": 2, "author": 0, "backscatt": 2, "bay": [1, 2], "belief": 2, "binder": 0, "catalog": 1, "cite": 3, "classif": [1, 2], "classifii": 1, "code": 1, "comparison": 1, "conclus": 1, "contributor": 0, "cookbook": [0, 3], "data": 1, "detect": 2, "display_nam": [1, 2], "e": 0, "eval": 1, "exampl": 0, "extent": 2, "find": 1, "flood": 2, "fold": 1, "forest": 1, "format": 1, "foundat": 0, "from": 2, "g": 0, "help": 2, "how": [2, 3], "html": 1, "idea": 2, "imag": 1, "imageri": 1, "interest": 1, "jupyt": [1, 2], "kernelspec": [1, 2], "land": 2, "languag": [1, 2], "likelihood": 2, "load": 1, "machin": 0, "map": 2, "microwav": 2, "motiv": 0, "naiv": 1, "name": [1, 2], "ndvi": 1, "notebook": 0, "old": 2, "our": 2, "over": 2, "own": 0, "posterior": 2, "prepar": 1, "python": [1, 2], "random": 1, "refer": 4, "region": 1, "replac": 0, "replace_with_your_titl": 0, "reverend": 2, "rgb": 1, "run": 0, "satelit": 1, "search": 1, "section": 0, "show": 1, "structur": 0, "subtitl": [1, 2], "thi": [0, 3], "titl": [0, 1, 2], "true": 1, "unnumb": 4, "updat": 2, "visual": 1, "water": 2, "workflow": 0, "year": 2, "your": 0}})