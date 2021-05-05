(module
 (type $i32_=>_i32 (func (param i32) (result i32)))
 (type $i32_i32_i32_=>_i32 (func (param i32 i32 i32) (result i32)))
 (global $assembly/index/add i32 (i32.const 1056))
 (memory $0 1)
 (data (i32.const 1036) "\1c")
 (data (i32.const 1048) "\03\00\00\00\08\00\00\00\01")
 (export "add" (global $assembly/index/add))
 (export "fibSimple" (func $assembly/index/fibSimple))
 (export "tarai" (func $assembly/index/tarai))
 (export "memory" (memory $0))
 (func $assembly/index/fibSimple (param $0 i32) (result i32)
  local.get $0
  i32.const 1
  i32.le_s
  if
   i32.const 1
   return
  end
  local.get $0
  i32.const 1
  i32.sub
  call $assembly/index/fibSimple
  local.get $0
  i32.const 2
  i32.sub
  call $assembly/index/fibSimple
  i32.add
 )
 (func $assembly/index/tarai (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  local.get $0
  local.get $1
  i32.le_s
  if
   local.get $1
   return
  end
  local.get $0
  i32.const 1
  i32.sub
  local.get $1
  local.get $2
  call $assembly/index/tarai
  local.get $1
  i32.const 1
  i32.sub
  local.get $2
  local.get $0
  call $assembly/index/tarai
  local.get $2
  i32.const 1
  i32.sub
  local.get $0
  local.get $1
  call $assembly/index/tarai
  call $assembly/index/tarai
 )
)
