"use strict"

import * as gt from "./js/gestionTasks.js";
import * as gw from "./js/gestionWeb.js";

// Prevent confirm from resend
window.history.replaceState(null, null, window.location.href);

gt.addTask(new gt.NewTask("Test", true, "2021-12-31 05:10", ["test", " tag1", "tag2"]));

gw.repaint();