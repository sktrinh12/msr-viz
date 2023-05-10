# msr-viz

### Introduction

The MSR is a statistical parameter that characterizes the reproducibility of potency estimates from in vitro concentration-response assays. Biological activity expressed as potency of compounds is an important parameter in screening and drug discovery. This app allows users to visualise the Bland-Altman plot of biochemical and cellular data stored in the DM oracle database.

### Reference papers

- [https://www.ncbi.nlm.nih.gov/books/NBK169432/](https://www.ncbi.nlm.nih.gov/books/NBK169432/)
- [https://pubmed.ncbi.nlm.nih.gov/16490778/](https://pubmed.ncbi.nlm.nih.gov/16490778/)

#### SQL functions

There are three Oracle Functions that are of interest: 1) `CALC_MSR2` 2) `MOST_RECENT_FT_NBRS2` 3) `GEN_GEOMEAN_CURVE_TBL`. `CALC_MSR2` relies on `MOST_RECENT_FT_NBRS2`. The full code can be viewed by observing the Functions tab within SQL Developer. Function 3) generates the Curve QC tool output that is triggered as a pop-up within DM. Note the same functions without the ‘2’ suffix are deprecated functions that aren’t used and was developed during testing phase. Function 3 now takes significantly longer to process the SQL query since it will calculate every unique combination of the following fields: CRO, assay type, variant, (cell incubation hr / target), (atp conc / pct serum), (cofactors / cell line).

### Frontend

The MSR plot piggy-backs on the geomean-ic50-flagger app that was written in ReactJS+python. Since ~30% of the code can be re-used it was decided to append a separate module to the geomean app rather than create a new one from scratch and duplicate code. Function 3 from above passes in query string parameters to provide to the JavaScript application that then calls the correct API to the python backend app.
