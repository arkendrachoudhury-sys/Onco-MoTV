## 2025-03-09 - [Bolt Journal Entry]
**Learning / Vulnerability / Insight:** Using array indices as React keys causes unnecessary re-renders and potential UI bugs during reconciliation, particularly when filtering/sorting lists. Additionally, expensive functions (e.g. string manipulation) inside `.filter` loops should be optimized by pre-processing query strings.
**Action / Prevention:** Always use stable, unique compound keys for dynamic list rendering, and pre-compute lowercased values or other operations outside loop boundaries.
