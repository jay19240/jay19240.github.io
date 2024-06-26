MasteryRankControl = {
  //
  // SET UNIT RANK: Used by events to test play different rank values
  //
  setUnitRank: function (unit_id, weapon_type_name, rank_id, rank_xp) {
    var unit_list = PlayerList.getSortieList();
    var unit = null;
    var j = 0;

    while (j < unit_list.getCount()) {
      var item = unit_list.getData(j);
      if (item.getId() == unit_id && !item.isGuest()) {
        unit = item;
        break;
      }

      j++;
    }

    if (!unit) {
      return throwError005();
    }

    var mastery_param = FIND(this, MASTERY_PARAMS, function (p) {
      return p.weapon_type_name == weapon_type_name;
    });

    if (!mastery_param) {
      return throwError003();
    }

    var unit_stat = FIND(this, unit.custom.mastery_ranks, function (r) {
      return r.weapon_type_name == weapon_type_name;
    });

    if (unit_stat) {
      unit_stat.weapon_type_name = weapon_type_name;
      unit_stat.rank_id = rank_id;
      unit_stat.rank_xp = rank_xp;
    }
    else {
      unit.custom.mastery_ranks.push({
        weapon_type_name: weapon_type_name,
        rank_id: rank_id,
        rank_xp: rank_xp
      });
    }

    // debug start
    var d_param_value = ParamGroup.getUnitValue(unit, mastery_param.type);
    root.log('unit ' + unit.getId() + ' set rank of ' + weapon_type_name + ' to ' + d_param_value);
    // debug end
  },

  //
  // INCREASE UNIT RANK: Used by events to increase rank values
  //
  increaseUnitRank: function (unit_id, weapon_type_name, xp_amount) {
    var unit_list = PlayerList.getSortieList();
    var unit = null;
    var j = 0;

    while (j < unit_list.getCount()) {
      var item = unit_list.getData(j);
      if (item.getId() == unit_id && !item.isGuest()) {
        unit = item;
        break;
      }

      j++;
    }

    if (!unit) {
      return throwError005();
    }

    if ("Arbalètes" == "Arbalètes") {
      root.log('pass okay');
    }

    root.log('weapon_type_name' + weapon_type_name);

    var mastery_param = FIND(this, MASTERY_PARAMS, function (p) {
      root.log('p_weapon_type_name' + p.weapon_type_name.toString());
      return p.weapon_type_name == weapon_type_name;
    });

    if (!mastery_param) {
      return throwError003();
    }

    var value = ParamGroup.getUnitValue(unit, mastery_param.type);
    var v = value.split(';');
    var rank_id = parseInt(v[0]);
    var rank_xp = parseInt(v[1]);
    var new_rank_xp = rank_xp + xp_amount;

    ParamGroup.setUnitValue(unit, mastery_param.type, rank_id + ';' + new_rank_xp);
    MasteryRankControl.checkRankUp(unit, mastery_param.type, new_rank_xp, false);

    // debug start
    var d_param_value = ParamGroup.getUnitValue(unit, mastery_param.type);
    root.log('unit ' + unit.getId() + ' increase rank xp of ' + weapon_type_name + ' to ' + d_param_value);
    // debug end
  },

  //
  // GET_PARAM_BONUS: Get the bonus for specific param with a specific weapon type.
  //
  getParamBonus: function (unit, weapon_type_name, param_name) {
    if (!unit.custom.mastery_ranks) {
      return 0;
    }

    var mastery_param = FIND(this, MASTERY_PARAMS, function (p) {
      return p.weapon_type_name == weapon_type_name;
    });

    if (!mastery_param) {
      return 0;
    }

    var value = ParamGroup.getUnitValue(unit, mastery_param.type);
    var v = value.split(';');
    var rank_id = parseInt(v[0]);

    var bonus = FIND(this, MASTERY_PARAMS_ATTACK_BONUS, function (b) {
      return b.param_name == param_name && b.rank_id == rank_id && b.weapon_type_names.indexOf(weapon_type_name) != -1;
    });

    return bonus ? bonus.amount : 0;
  },

  //
  // CHECK_RANK_UP: Called every time an unit gains weapon experience.
  //
  checkRankUp: function (unit, param_type, new_xp, reset_xp_on_new_rank) {
    var value = ParamGroup.getUnitValue(unit, param_type);
    var v = value.split(';');

    var rank_id = parseInt(v[0]);
    if (rank_id == MASTERY_RANKS.length - 1) {
      return;
    }

    var xp_remains = ParamGroup.getMaxValue(unit, param_type) - new_xp;

    if (xp_remains <= 0) {
      rank_id++;

      if (reset_xp_on_new_rank) {
        ParamGroup.setUnitValue(unit, param_type, rank_id + ';' + 0);
      }
      else {
        ParamGroup.setUnitValue(unit, param_type, rank_id + ';' + Math.abs(xp_remains));
      }

      var race_id = unit.getClass().getRaceReferenceList().getTypeData(0).getId();
      var skill_id_to_add = -1;
      var skill_id_to_remove = -1;

      var reward = FIND(this, MASTERY_SKILL_REWARDS, function (s) {
        return s.rank_id == rank_id && s.race_id == race_id && s.param_type == param_type;
      });

      if (reward) {
        skill_id_to_add = reward.add_skill_id;
        skill_id_to_remove = reward.remove_skill_id;
      }

      this._saveRankUp(unit, param_type, skill_id_to_add, skill_id_to_remove);
    }
  },

  //
  // SAVE_RANK_UP: Saves the information related to the new rank up; Used later in showRankUp.
  //
  _saveRankUp: function (unit, param_type, skill_id_to_add, skill_id_to_remove) {
    var mastery_param = FIND(this, MASTERY_PARAMS, function (p) {
      return p.type == param_type;
    });

    if (!mastery_param) {
      return throwError003();
    }

    var value = ParamGroup.getUnitValue(unit, param_type);
    var v = value.split(';');
    var rank_id = parseInt(v[0]);

    var message = 'Rank up: ' + mastery_param.weapon_type_name;
    root.getMetaSession().global.rankup_data = {};
    root.getMetaSession().global.rankup_data.unit = unit;
    root.getMetaSession().global.rankup_data.message = message;
    root.getMetaSession().global.rankup_data.rank = MASTERY_RANKS[rank_id].name;
    root.getMetaSession().global.rankup_data.weapon_type = mastery_param.weapon_type_name;
    root.getMetaSession().global.rankup_data.skill_id_to_add = skill_id_to_add;
    root.getMetaSession().global.rankup_data.skill_id_to_remove = skill_id_to_remove;
  },

  //
  // SHOW_RANK_UP: Called every time an unit gains a weapon rank and show a message to notice the player.
  //
  showRankUp: function () {
    var rankup_data = root.getMetaSession().global.rankup_data;
    if (!rankup_data) {
      return;
    }

    var dynamicEvent = createObject(DynamicEvent);
    var generator = dynamicEvent.acquireEventGenerator();

    generator.messageTitle(rankup_data.message, 0, 0, true);

    var skill_to_add = root.getBaseData().getSkillList().getDataFromId(rankup_data.skill_id_to_add);
    var skill_to_remove = root.getBaseData().getSkillList().getDataFromId(rankup_data.skill_id_to_remove);

    if (skill_to_add) {
      generator.skillChange(rankup_data.unit, skill_to_add, IncreaseType.INCREASE, false);
    }

    if (skill_to_remove) {
      generator.skillChange(rankup_data.unit, skill_to_remove, IncreaseType.DECREASE, false);
    }

    root.getMetaSession().global.rankUpMessage = null;
    dynamicEvent.executeDynamicEvent();
    root.getMetaSession().global.rankup_data = null;
  }
};